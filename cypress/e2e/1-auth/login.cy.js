/// <reference types="cypress" />

describe("Login Test", () => {
  it("Visit Landing Page Demoblaze", () => {
    cy.visit("https://demoblaze.com/");
    // cy.get(".login_logo").should("contain.text", "Swag Labs");
  });
  it("Login", () => {
    cy.visit("https://demoblaze.com/");
    cy.get("#login2").click();
    cy.wait(1500);
    cy.get("#loginusername").type("usertesting123");
    cy.get("#loginpassword").type("password");
    cy.get(
      "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
  });
});
