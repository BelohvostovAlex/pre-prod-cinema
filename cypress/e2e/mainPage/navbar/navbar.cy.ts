/// <reference types="cypress"/>
import { newUser, userCredentials } from "../../../mock/index";

describe("test header navbar buttons", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.window().then((win) => {
      win.localStorage.clear();
    });
  });

  it("after login, should appear button 'Profile' and dissapear buttons login&register", () => {
    cy.get("[data-cy='sign-in']").click();
    cy.get("#email").click().should("be.focused").type(userCredentials.admin);
    cy.get("#password").click().should("be.focused").type(userCredentials.pass);

    cy.get("[data-cy='enter']").click();

    Cypress.config("defaultCommandTimeout", 5000);

    cy.get("[data-cy='sign-in']").should("not.exist");
    cy.get("[data-cy='sign-up']").should("not.exist");
    cy.get("[data-cy='profile']").should("exist");
  });

  it("before login, user cant access Booking page", () => {
    cy.get("[data-cy='profile']").should("not.exist");
    cy.get("[href='/bookings']").should("not.exist");
    cy.location("pathname").should("eq", "/");
  });

  it("after login, user has access to Booking page by clicking on Booking nav button", () => {
    cy.get("[data-cy='sign-in']").click();
    cy.get("#email").click().should("be.focused").type(userCredentials.admin);
    cy.get("#password").click().should("be.focused").type(userCredentials.pass);

    cy.get("[data-cy='enter']").click();

    Cypress.config("defaultCommandTimeout", 10000);

    cy.get("[data-cy='profile']").should("exist");
    cy.get("[href='/bookings']").first().click();
    cy.location("pathname").should("eq", "/bookings");
  });

  it("after register, should appear button 'Profile' and dissapear buttons login&register", () => {
    cy.get("[data-cy='sign-up']").click();
    cy.get("#email").click().should("be.focused").type(newUser.admin);
    cy.get("#password").click().should("be.focused").type(newUser.pass);
    cy.get("#username").click().should("be.focused").type(newUser.username);
    cy.get("#surname").click().should("be.focused").type(newUser.surname);

    cy.get("[data-cy='enter']").click();

    Cypress.config("defaultCommandTimeout", 5000);

    cy.get("[data-cy='sign-in']").should("not.exist");
    cy.get("[data-cy='sign-up']").should("not.exist");
    cy.get("[data-cy='profile']").should("exist");
  });

  it("after trying to register user that is already exists, should appear alert", () => {
    cy.get("[data-cy='sign-up']").click();
    cy.get("#email").click().should("be.focused").type(newUser.admin);
    cy.get("#password").click().should("be.focused").type(newUser.pass);
    cy.get("#username").click().should("be.focused").type(newUser.username);
    cy.get("#surname").click().should("be.focused").type(newUser.surname);

    cy.get("[data-cy='enter']").click();

    Cypress.config("defaultCommandTimeout", 10000);

    cy.get("[data-cy='alert']").should("exist");
  });
});
