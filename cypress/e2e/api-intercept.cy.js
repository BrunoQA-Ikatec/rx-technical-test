describe("API Interception", () => {
    it("Should intercept and validate the API request and response", () => {
      cy.intercept('POST', 'https://jsonplaceholder.typicode.com/posts', (req) => {
        expect(req.body).to.have.property("title").that.is.a("string");
        expect(req.body).to.have.property("body").that.is.a("string");
        expect(req.body).to.have.property("userId").that.is.a("number");

        req.reply({
          statusCode: 201,
          body: {
            id: 101,
            ...req.body
          }
        });
      }).as('postRequest');

      cy.visit('/');
      cy.window().then((win) => {
        win.fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: "Product Added",
            body: "Added product to cart",
            userId: 1
          })
        });
      });

      cy.wait('@postRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(201);
        expect(interception.response.body).to.have.property('id').that.is.a('number');
      });
    });
});
  