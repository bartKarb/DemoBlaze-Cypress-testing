import { logIn } from "../support/commands";
import { buySamsung } from "../support/commands";
import { registerUser } from "../support/commands";

describe("Demoblaze tests", () => {
  it("Register into the page", () => {
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Sign up successful.");
    });
    registerUser();
  });

  it("Login into the page", () => {
    logIn("TestUser432", "TestPassword123");
    cy.get("#nameofuser").should("contain", "TestUser432");
  });

  it("Buying a Samsung galaxy s6", () => {
    logIn("TestUser432", "TestPassword123");
    buySamsung();
  });
});
