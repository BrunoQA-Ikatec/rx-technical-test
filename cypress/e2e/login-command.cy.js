describe("User Login", () => {
    it("Should log in successfully", () => {
      cy.visit("/");
      cy.contains("button", "Exercise 5 - Login Command").click();
  
      cy.login("test@example.com", "password123");
    });
  });
  