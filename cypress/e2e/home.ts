/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    cy.visit('/')

    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /LEGO Star Wars: A Saga Skywalker/i })
      cy.findByRole('link', { name: /COMPRE AGORA/i })

      cy.get('.slick-dots > :nth-child(2) > button').click()
      cy.wait(500)

      cy.findByRole('heading', { name: /Life Is Strange: TRUE COLORS/i })
      cy.findByRole('link', { name: /Conheça Haven Springs/i })

      cy.get('.slick-dots > :nth-child(3) > button').click()
      cy.wait(500)

      cy.findByRole('heading', { name: /Marvel's Spider-Man: Miles Morales/i })
      cy.findByRole('link', { name: /COMPRE AGORA/i })
      
      cy.get('.slick-dots > :nth-child(4) > button').click()
      cy.wait(500)

      cy.findByRole('heading', { name: /Star Wars Jedi: Fallen Order/i })
      cy.findByRole('link', { name: /TORNE-SE UM JEDI/i })
    })
  })
})
