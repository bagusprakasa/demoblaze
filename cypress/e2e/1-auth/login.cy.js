/// <reference types="cypress" />

describe("Auth Test", () => {
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
  it("Detail product", () => {
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
  it("Add to cart", () => {
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
    cy.get(".col-sm-12 > .btn").click();
    cy.get("#cartur").click();
    cy.get(".col-lg-1 > .btn").click();
  });
});
it("Place Order", () => {
  cy.visit("https://demoblaze.com/");
  cy.get("#login2").click();
  cy.wait(1500);
  cy.get("#loginusername").type("usertesting123");
  cy.get("#loginpassword").type("password");
  cy.get(
    "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
  ).click();
  cy.get("#cartur").click();
  cy.get(".col-lg-1 > .btn").click();
});
