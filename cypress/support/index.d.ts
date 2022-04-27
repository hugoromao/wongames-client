// load type definitios from cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

declare namespace Cypress {
  interface Chainable {
    google(): Chainable<Window>
    shouldRenderBanner(): Chainable<Element>
    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>
  }
}
