describe("Verify Checkbox State", () => {
    it("Should confirm checkbox linked to 'Test2' is checked", () => {
      cy.visit("/");
      cy.contains("button", "Exercise 3 - Checkbox Verification").click();
  
      cy.get('[data-cy="test-grid-3"]')
        .find(".item-content")
        .contains("p", "Test2")
        .parents(".item-content")
        .find('input[type="checkbox"]')
        .should("be.checked");
    });
  });
  