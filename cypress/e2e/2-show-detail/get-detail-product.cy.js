/// <reference types="cypress" />

describe("Get detail product Test", () => {
  it("Get detail product", () => {
    cy.visit("https://demoblaze.com/");
    cy.get("#login2").click();
    cy.wait(1500);
    cy.get("#loginusername").type("usertesting123");
    cy.get("#loginpassword").type("password");
    cy.get(
      "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    cy.get(
      ":nth-child(1) > .card > .card-block > .card-title > .hrefch"
    ).click();
  });
});
