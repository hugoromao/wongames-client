/// <reference path="../support/index.d.ts" />

describe('Game Page', () => {
  it('should render game page sections', () => {
    cy.visit('/game/spiritfarer-demo')
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
  })
})
