// load type definitios from cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

type FieldsAttributes = {
  label: string
  name: string | number
}

declare namespace Cypress {
  interface Chainable {
    google(): Chainable<Window>
    getByDataCy(selector: string): Chainable<Element>
    shouldRenderBanner(): Chainable<Element>
    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>
    getFields(fields: FieldsAttributes[]): Chainable<Element>
  }
}
