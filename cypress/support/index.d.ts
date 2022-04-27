// load type definitios from cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    google(): Chainable<Window>
  }
}
