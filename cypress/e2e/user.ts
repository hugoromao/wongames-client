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

  it.skip('should sign in and sign out', () => {
    cy.visit('/sign-in')

    cy.signIn()

    cy.findByText(/hugo8romao@gmail\.com/i)
      .should('exist')
      .click()

    cy.findByText(/sign out/i).click()

    cy.wait(5000)

    cy.findByRole('link', { name: /sign in/i }).should('exist')
    cy.findByText(/hugo8romao@gmail\.com/i).should('not.exist')
  })

  it('should sign the user and redirect to the page that it was defined previously', () => {
    cy.visit('/profile/me')
    cy.location('href').should(
      'eq',
      `${Cypress.config().baseUrl}sign-in?callbackUrl=/profile/me`
    )

    cy.signIn()

    cy.location('href').should('eq', `${Cypress.config().baseUrl}profile/me`)

    cy.findByLabelText(/username/i).should('have.value', 'Hugo Lima')
    cy.findByLabelText(/e-mail/i).should('have.value', 'hugo8romao@gmail.com')
  })
})
