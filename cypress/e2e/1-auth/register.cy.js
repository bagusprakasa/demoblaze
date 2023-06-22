/// <reference types="cypress" />

describe("Register Test", () => {
  it("Visit Landing Page Demoblaze", () => {
    cy.visit("https://demoblaze.com/");
  });
  it("Register", () => {
    cy.visit("https://demoblaze.com/");
    cy.get("#signin2").click();
    cy.wait(1000);
    cy.get("#sign-username").type("usertesting1234");
    cy.get("#sign-password").type("usertesting1234");
    cy.get(
      "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
  });
});
