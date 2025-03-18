describe("Find Product with Specific Price", () => {
    it("Should find the product with price $59", () => {
      cy.visit("/");
  
      cy.get('[data-cy="product-item"]').each(($el) => {
        cy.wrap($el).find('[data-cy="product-price"]').invoke('text').then((price) => {
          if (price.trim() === "$59") {
            cy.wrap($el).find('[data-cy="product-name"]').should("have.text", "Mouse");
            cy.wrap($el).click();
          }
        });
      });
    });
  });
