/// <reference types="cypress"/>

describe("test header navbar buttons - tablet viewport", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(960, 540);
    cy.window().then((win) => {
      win.localStorage.clear();
    });
  });

  it("should have only login icon without login/register buttons", () => {
    cy.get("[data-cy='sign-in']").should("not.exist");
    cy.get("[data-cy='sign-up']").should("not.exist");
    cy.get("[data-cy='settings-button']").should("exist");

    cy.get("[data-cy='header-button-group'] > div:first-of-type()")
      .should("exist")
      .click();
    cy.get("[data-cy='enter']").should("exist");
  });
});
