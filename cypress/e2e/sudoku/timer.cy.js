/// <reference types="cypress" />


describe('Timer', () => {
    beforeEach(() => {
        
        cy.visit('/')
    })

    it('shows 10 seconds', () => {
        for (let index = 0; index < 10; index++) {
            cy.contains('.status__time', `00:0${index}`, { timeout: 10500 })
        }
        cy.get('.game__cell--filled').should('have.length', 45)
    })

    it.skip('shows minutes and seconds since the game started', () => {
        cy.clock()
        cy.contains('.status__time','00:00')
        cy.tick(30_000)
        cy.contains('.status__time','00:01')
    })
})