/// <reference path="../support/index.d.ts" />

describe('Game Page', () => {
  before(() => {
    cy.visit('/game/spiritfarer-demo')
  })

  it('should render game page sections', () => {
    cy.wait(10000)

    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: /Spiritfarer Demo/i }).should('exist')
      cy.findByText(/^The full version of Spiritfarer is available/i).should(
        'exist'
      )
      cy.findByText('FREE').should('exist')
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })

    // gallery
    cy.findAllByRole('button', { name: /thumb \-/i }).should(
      'have.length.gt',
      0
    )

    // content
    cy.getByDataCy('content').within(() => {
      cy.findByRole('heading', { name: /description/i }).should('exist')
    })

    cy.getByDataCy('content').children().should('have.length.at.least', 2)

    // Details
    cy.getByDataCy('game-details').within(() => {
      cy.findByRole('heading', { name: /game details/i }).should('exist')
      cy.findByRole('heading', { name: /developer/i }).should('exist')
      cy.findByRole('heading', { name: /release date/i }).should('exist')
      cy.findByRole('heading', { name: /platforms/i }).should('exist')
      cy.findByRole('heading', { name: /publisher/i }).should('exist')
      cy.findByRole('heading', { name: /rating/i }).should('exist')
      cy.findByRole('heading', { name: /genres/i }).should('exist')

      cy.findAllByText(/Thunder Lotus Games/i).should('have.length', 2)
      cy.findByText(/Aug 16, 2020/i).should('exist')
      cy.findByRole('img', { name: /windows/i }).should('exist')
      cy.findByText(/free/i).should('exist')
      cy.findByText('Adventure / Simulation / Platformer').should('exist')
    })

    cy.shouldRenderShowcase({
      name: 'You may like these games',
      highlight: false
    })
  })

  it('should add/remove game in cart', () => {
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
      cy.findByRole('button', { name: /remove from cart/i }).should('exist')
    })

    cy.findAllByLabelText(/cart items/i)
      .first()
      .contains(1)
      .click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findByRole('heading', { name: /Spiritfarer Demo/i }).should('exist')
    })

    // close dropdown
    cy.findAllByLabelText(/cart items/i)
      .first()
      .click()

    // remove from cart
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })

    cy.findAllByLabelText(/cart items/i).should('not.exist')
  })
})
