/// <reference types="cypress"/>
import { userCredentials } from "../../../mock/index";

describe("test auth functionality with redux store", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.window().then((win) => {
      win.localStorage.clear();
    });
  });

  it("after entering the email/password info and clicking 'Enter' submit button the user field isLoading from userSlice should be true", () => {
    cy.get("[data-cy='sign-in']").click();
    cy.get("#email").click().should("be.focused").type(userCredentials.admin);
    cy.get("#password").click().should("be.focused").type(userCredentials.pass);

    cy.window()
      .its("store")
      .invoke("getState")
      .its("user")
      .its("isLoading")
      .should("be.false");

    cy.get("[data-cy='enter']").click();

    cy.window()
      .its("store")
      .invoke("getState")
      .its("user")
      .its("isLoading")
      .should("be.true");
  });

  it("after entering the email/password info and clicking 'Enter' submit button the user field isAuth from userSlice should be true", () => {
    cy.get("[data-cy='sign-in']").click();
    cy.get("#email").click().should("be.focused").type(userCredentials.admin);
    cy.get("#password").click().should("be.focused").type(userCredentials.pass);

    cy.window()
      .its("store")
      .invoke("getState")
      .its("user")
      .its("isAuth")
      .should("be.false");

    cy.get("button[data-cy='enter']").click();

    cy.window()
      .its("store")
      .invoke("getState")
      .its("user")
      .its("isLoading")
      .should("be.true");

    Cypress.config("defaultCommandTimeout", 10000);

    cy.window()
      .its("store")
      .invoke("getState")
      .its("user")
      .its("isAuth")
      .should("be.true");
  });

  it(`after entering the email/password info and clicking 'Enter' submit button the user field email from userSlice should be ${userCredentials.admin}`, () => {
    cy.get("[data-cy='sign-in']").click();
    cy.get("#email").click().should("be.focused").type(userCredentials.admin);
    cy.get("#password").click().should("be.focused").type(userCredentials.pass);

    cy.window()
      .its("store")
      .invoke("getState")
      .its("user")
      .its("user")
      .should("not.have.a.property", "email");

    cy.get("[data-cy='enter']").click();

    Cypress.config("defaultCommandTimeout", 10000);

    cy.window()
      .its("store")
      .invoke("getState")
      .its("user")
      .its("user")
      .should("have.a.property", "email");

    cy.window()
      .its("store")
      .invoke("getState")
      .its("user")
      .its("user")
      .its("email")
      .should("equal", `${userCredentials.admin}`);
  });
});
