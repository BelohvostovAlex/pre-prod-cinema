/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("test video player", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.window().then((win) => {
      win.localStorage.clear();
    });
  });

  it("should appear video player modal and disappear when click on close button", () => {
    cy.get("[data-cy='trailer-img'] + div").click();
    cy.get("[data-cy='video-player']").should("exist");

    cy.get("[data-cy='close-modal-btn-wrapper'] > div").should("exist").click();
    cy.get("[data-cy='video-player']").should("not.exist");
  });

  it("should play/pause video while clicking on play/pause button", () => {
    cy.get("[data-cy='trailer-img'] + div").click();
    cy.get("[data-cy='video-player']").should("exist");

    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("isPlaying")
      .should("be.false");

    cy.get("[data-cy='video-player'] > div").trigger("mouseover");
    cy.get("[data-cy='play']").should("exist").click();

    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("isPlaying")
      .should("be.true");

    cy.get("[data-cy='pause']").should("exist").click();

    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("isPlaying")
      .should("be.false");
  });

  it("should rewind forward video while clicking on rewind forward button", () => {
    cy.get("[data-cy='trailer-img'] + div").click();
    cy.get("[data-cy='video-player']").should("exist");

    cy.get("[data-cy='video-player'] > div").trigger("mouseover");
    cy.get("[data-cy='play']").should("exist").click();
    cy.get("[data-cy='fastForward']").should("exist").click();
  });

  it("should rewind forward and back video while clicking on rewind forward button and rewind back button", () => {
    cy.get("[data-cy='trailer-img'] + div").click();
    cy.get("[data-cy='video-player']").should("exist");

    cy.get("[data-cy='video-player'] > div").trigger("mouseover");
    cy.get("[data-cy='play']").should("exist").click();

    cy.get("[data-cy='fastForward']").should("exist").click();
    cy.get("[data-cy='revert']").should("exist").click();
  });

  it("should rewind forward and back video, then pause the video, while clicking on rewind forward button and rewind back button, pause button", () => {
    cy.get("[data-cy='trailer-img'] + div").click();
    cy.get("[data-cy='video-player']").should("exist");

    cy.get("[data-cy='video-player'] > div").trigger("mouseover");
    cy.get("[data-cy='play']").should("exist").click();
    cy.get("[data-cy='fastForward']").should("exist").click();
    cy.get("[data-cy='revert']").should("exist").click();
    cy.get("[data-cy='pause']").should("exist").click();
  });

  it("should unmute and mute the video", () => {
    cy.get("[data-cy='trailer-img'] + div").click();
    cy.get("[data-cy='video-player']").should("exist");

    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("isMuted")
      .should("be.true");

    cy.get("[data-cy='video-player'] > div").trigger("mouseover");
    cy.get("[data-cy='play']").should("exist").click();
    cy.get("[data-cy='mute']").should("exist").click();

    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("isMuted")
      .should("be.false");

    cy.get("[data-cy='mute']").should("exist").click();

    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("isMuted")
      .should("be.true");
  });

  it("should play video on full scren and vice versa", () => {
    cy.get("[data-cy='trailer-img'] + div").click();
    cy.get("[data-cy='video-player']").should("exist");

    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("isFullScreen")
      .should("be.false");

    cy.get("[data-cy='video-player'] > div").trigger("mouseover");
    cy.get("[data-cy='play']").should("exist").click();
    cy.get("[data-cy='fullscreen']").should("exist").click();

    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("isFullScreen")
      .should("be.true");

    cy.get("body").trigger("keydown", { keyCode: 27 });
    cy.wait(500);
    cy.get("body").trigger("keyup", { keyCode: 27 });
  });

  it("should play video with 1.25, 1.5, 1.75, 2", () => {
    cy.get("[data-cy='trailer-img'] + div").click();
    cy.get("[data-cy='video-player']").should("exist");

    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("speed")
      .should("be.eq", 1);

    cy.get("[data-cy='video-player'] > div").trigger("mouseover");
    cy.get("[data-cy='play']").should("exist").click();
    cy.wait(500);
    cy.get("[data-cy='video-player'] > div").click();
    cy.get("body").type("{shift+>}");
    cy.wait(500);
    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("speed")
      .should("be.eq", 1.25);

    cy.get("body").type("{shift+>}");
    cy.wait(500);
    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("speed")
      .should("be.eq", 1.5);

    cy.get("body").type("{shift+>}");
    cy.wait(500);
    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("speed")
      .should("be.eq", 1.75);

    cy.get("body").type("{shift+>}");
    cy.wait(500);
    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("speed")
      .should("be.eq", 2);
  });

  it("should play video with 0.75, 0.5, 0.25", () => {
    cy.get("[data-cy='trailer-img'] + div").click();
    cy.get("[data-cy='video-player']").should("exist");

    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("speed")
      .should("be.eq", 1);

    cy.get("[data-cy='video-player'] > div").trigger("mouseover");
    cy.get("[data-cy='play']").should("exist").click();
    cy.wait(500);
    cy.get("[data-cy='video-player'] > div").click();
    cy.get("body").type("{shift+<}");
    cy.wait(500);
    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("speed")
      .should("be.eq", 0.75);

    cy.get("body").type("{shift+<}");
    cy.wait(500);
    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("speed")
      .should("be.eq", 0.5);

    cy.get("body").type("{shift+<}");
    cy.wait(500);
    cy.window()
      .its("store")
      .invoke("getState")
      .its("video")
      .its("speed")
      .should("be.eq", 0.25);
  });
});
