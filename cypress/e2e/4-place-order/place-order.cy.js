/// <reference types="cypress" />

describe("Add to cart Test", () => {
  it("Add to cart", () => {
    cy.visit("https://demoblaze.com/");
    cy.get("#login2").click();
    cy.wait(500);
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
    cy.wait(500);
    cy.get("#name").type("usertesting123");
    cy.get("#country").type("indonesia");
    cy.get("#city").type("jakarta");
    cy.get("#card").type(1234567);
    cy.get("#month").type(12);
    cy.get("#year").type(2023);
    cy.get(
      "#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    cy.get(".confirm").click();
  });
});
