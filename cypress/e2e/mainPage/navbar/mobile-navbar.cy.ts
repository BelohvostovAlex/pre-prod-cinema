/// <reference types="cypress"/>

describe("test header navbar buttons - mobile viewport", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(480, 640);
    cy.window().then((win) => {
      win.localStorage.clear();
    });
  });

  it("should have only login/burger/settings icons without login/register/navbar buttons", () => {
    cy.get("[data-cy='sign-in']").should("not.exist");
    cy.get("[data-cy='sign-up']").should("not.exist");

    cy.get("[data-cy='settings-button']").should("exist");
    cy.get("[data-cy='header-button-group'] > div:first-of-type()").should(
      "exist",
    );
    cy.get("[data-cy='burger-button']").should("exist");
  });

  it("should appear drawer with burger menu when clicking on burger icon", () => {
    cy.get("[data-cy='burger-button']").should("exist").click();

    cy.get("a[href='/']").should("exist");
  });
});
