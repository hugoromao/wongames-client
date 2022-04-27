/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('User', () => {
  it.skip('should sign up', () => {
    const user = createUser()

    cy.visit('/sign-up')
    cy.signUp(user)

    cy.findByPlaceholderText(/nome/i).type(user.username)
    cy.findByPlaceholderText(/email/i).type(user.email)
    cy.findByPlaceholderText(/^senha/i).type(user.password)
    cy.findByPlaceholderText(/confirmar senha/i).type(user.password)

    cy.findByRole('button', { name: /sign up now/i }).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}`)
    cy.findByText(user.username).should('exist')
  })

  it('should sign in and sign out', () => {
    cy.visit('/sign-in')

    cy.findByPlaceholderText(/email/i).type('hugo8romao@gmail.com')
    cy.findByPlaceholderText(/^password/i).type('12345678')
    cy.findByRole('button', { name: /sign in now/i }).click()
    cy.findByText(/hugo8romao@gmail\.com/i)
      .should('exist')
      .click()

    cy.findByText(/sign out/i).click()

    cy.findByRole('link', { name: /sign in/i }).should('exist')
    cy.findByText(/hugo8romao@gmail\.com/i).should('not.exist')
  })
})
