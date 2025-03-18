describe("Product Selection", () => {
    it("Should click 'Add to Cart' button for the Gaming Headset", () => {
      cy.visit("/");
      cy.contains("button", "Exercise 6 - Product Selection").click();
  
      cy.get(".product-card")
        .contains("Gaming Headset")
        .parents(".product-card")
        .find('[data-cy="add-button"]')
        .click();
    });
  });
  