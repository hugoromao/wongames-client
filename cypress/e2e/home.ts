/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    cy.visit('/')

    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /LEGO Star Wars: A Saga Skywalker/i })
      cy.findByRole('link', { name: /COMPRE AGORA/i })
    })
  })
})
