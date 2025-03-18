describe("Find specific elements in table row", () => {
    it("Should locate elements in the correct row", () => {
      cy.visit("/");
      cy.contains("button", "Exercise 2 - Table Elements").click();
  
      cy.get('table[name="Test1"]')
        .contains("05/15/2024")
        .parentsUntil("tbody")
        .as("test-table");
  
      cy.get("@test-table").find("p").should("have.text", "First");
  
      cy.get("@test-table").find("span").should("have.text", "Accepted");
  
      cy.get("@test-table").find("button").contains("View").should("be.visible");
  
      cy.get("@test-table").find("button.button-order-more").click();
    });
  });
