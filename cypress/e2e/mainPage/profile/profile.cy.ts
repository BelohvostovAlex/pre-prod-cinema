/// <reference types="cypress"/>
import { userCredentials } from "../../../mock/index";

describe("test profile drawer", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.window().then((win) => {
      win.localStorage.clear();
    });
  });

  it("after login, user should have access to profile drawer and logout click on logout button", () => {
    cy.get("[data-cy='sign-in']").click();
    cy.get("#email").click().should("be.focused").type(userCredentials.admin);
    cy.get("#password").click().should("be.focused").type(userCredentials.pass);

    cy.get("[data-cy='enter']").click();

    cy.window()
      .its("store")
      .invoke("getState")
      .its("user")
      .its("isAuth")
      .should("be.true");

    Cypress.config("defaultCommandTimeout", 5000);

    cy.get("[data-cy='profile']").should("exist").click();
    cy.get("[data-cy='profile-buttons-wrapper'] > button:nth-child(3)")
      .should("exist")
      .click();

    cy.window()
      .its("store")
      .invoke("getState")
      .its("user")
      .its("isAuth")
      .should("be.false");

    cy.get("[data-cy='profile']").should("not.exist");
    cy.get("[data-cy='sign-in']").should("exist");
  });

  it("after login, user should have access to profile drawer and click on settings button to achieve settings modal", () => {
    cy.get("[data-cy='sign-in']").click();
    cy.get("#email").click().should("be.focused").type(userCredentials.admin);
    cy.get("#password").click().should("be.focused").type(userCredentials.pass);

    cy.get("[data-cy='enter']").click();

    cy.get("[data-cy='profile']").should("exist").click();
    cy.get("[data-cy='profile-buttons-wrapper'] > button:nth-child(2)")
      .should("exist")
      .click();

    cy.get("[data-cy='settings-block']").should("exist");
  });

  it("after login, user should have access to profile drawer and click on change profile button to achieve change profile form modal", () => {
    cy.get("[data-cy='sign-in']").click();
    cy.get("#email").click().should("be.focused").type(userCredentials.admin);
    cy.get("#password").click().should("be.focused").type(userCredentials.pass);

    cy.get("[data-cy='enter']").click();

    cy.get("[data-cy='profile']").should("exist").click();
    cy.get("[data-cy='profile-buttons-wrapper'] > button:nth-child(1)")
      .should("exist")
      .click();

    cy.get("[data-cy='edit-modal']").should("exist");
  });
});
