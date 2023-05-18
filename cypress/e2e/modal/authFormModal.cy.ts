/// <reference types="cypress"/>

describe("test sign in/sign up forms in modal", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.window().then((win) => {
      win.localStorage.clear();
    });
  });

  it("should appear sign in auth form", () => {
    cy.get("[data-cy='sign-in']").click();
    cy.get("#email").should("exist");
    cy.get("#password").should("exist");
    cy.get("#username").should("not.exist");
    cy.get("#surname").should("not.exist");
  });

  it("should appear sign up auth form", () => {
    cy.get("[data-cy='sign-up']").click();
    cy.get("#email").should("exist");
    cy.get("#password").should("exist");
    cy.get("#username").should("exist");
    cy.get("#surname").should("exist");
  });

  it("should appear sign up auth form after clicking on sign in form toggle button", () => {
    cy.get("[data-cy='sign-in']").click();
    cy.get("#email").should("exist");
    cy.get("#password").should("exist");
    cy.get("#username").should("not.exist");
    cy.get("#surname").should("not.exist");

    cy.get("[data-cy='auth-toggle']").click();

    cy.get("#username").should("exist");
    cy.get("#surname").should("exist");
  });

  it("should appear sign in auth form after clicking on sign up toggle button", () => {
    cy.get("[data-cy='sign-up']").click();
    cy.get("#email").should("exist");
    cy.get("#password").should("exist");
    cy.get("#username").should("exist");
    cy.get("#surname").should("exist");

    cy.get("[data-cy='auth-toggle']").click();

    cy.get("#username").should("not.exist");
    cy.get("#surname").should("not.exist");
  });

  it("should appear sign in auth form after clicking on sign up toggle button", () => {
    cy.get("[data-cy='sign-up']").click();
    cy.get("#email").should("exist");
    cy.get("#password").should("exist");
    cy.get("#username").should("exist");
    cy.get("#surname").should("exist");

    cy.get("[data-cy='auth-toggle']").click();

    cy.get("#username").should("not.exist");
    cy.get("#surname").should("not.exist");
  });

  it("should close the modal while clicking on close button", () => {
    cy.get("[data-cy='sign-up']").click();
    cy.get("#email").should("exist");
    cy.get("#password").should("exist");
    cy.get("#username").should("exist");
    cy.get("#surname").should("exist");

    cy.get("[data-cy='close-modal-btn-wrapper'] > div").should("exist").click();
    cy.get("[data-cy='modal']").should("not.exist");
  });
});
