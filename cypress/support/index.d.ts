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

type User = {
  username: string
  email: string
  password: string
}

declare namespace Cypress {
  interface Chainable {
    google(): Chainable<Window>
    getByDataCy(selector: string): Chainable<Element>
    shouldRenderBanner(): Chainable<Element>
    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>
    getFields(fields: FieldsAttributes[]): Chainable<Element>
    shouldBeLessThan(value: number): Chainable<Element>
    shouldBeGreaterThan(value: number): Chainable<Element>
    signUp(user: User): Chainable<Element>
  }
}
