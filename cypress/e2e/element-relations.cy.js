describe("Element Relations", () => {
    it("Should verify old-car is within my-class and 1 is a sibling", () => {
      cy.visit("/");
      cy.contains("button", "Exercise 4 - Element Relations").click();
  
      cy.get(".my-class")
        .contains("span", "old-car")
        .should("exist");
  
      cy.get(".my-class")
        .contains("span", "old-car")
        .siblings("span")
        .should("have.text", "1");
    });
  });
  