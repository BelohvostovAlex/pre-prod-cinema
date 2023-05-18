/// <reference types="cypress"/>

import { settingsColors, settingsTitle } from "../../../mock";

describe("test settings block in header", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.window().then((win) => {
      win.localStorage.clear();
    });
  });

  it("should appear settings modal and disappear when click on close button", () => {
    cy.get("[data-cy='settings-button']").click();
    cy.get("[data-cy='settings-block']").should("exist");

    cy.get("[data-cy='close-modal-btn-wrapper'] > div").should("exist").click();
    cy.get("[data-cy='settings-block']").should("not.exist");
  });

  it("should change lang from RU to EN and vice versa", () => {
    cy.get("[data-cy='settings-button']").click();
    cy.get("[data-cy='settings-block']").should("exist");

    cy.get("[data-cy='lang-buttons-wrapper'] > div:last-of-type()")
      .should("exist")
      .click();
    cy.get("[data-cy='lang-text']").should("have.text", `${settingsTitle.en}`);

    cy.get("[data-cy='lang-buttons-wrapper'] > div:first-of-type()")
      .should("exist")
      .click();
    cy.get("[data-cy='lang-text']").should("have.text", `${settingsTitle.ru}`);
  });

  it("should change theme from DARK to LIGHT and vice versa", () => {
    cy.get("[data-cy='settings-button']").click();
    cy.get("[data-cy='settings-block']").should("exist");

    cy.get("[data-cy='theme-buttons-wrapper'] > div:last-of-type()")
      .should("exist")
      .click();
    cy.get("[data-cy='lang-text']").should(
      "have.css",
      "color",
      `${settingsColors.dark}`,
    );

    cy.get("[data-cy='theme-buttons-wrapper'] > div:first-of-type()")
      .should("exist")
      .click();
    cy.get("[data-cy='lang-text']").should(
      "have.css",
      "color",
      `${settingsColors.light}`,
    );
  });
});
