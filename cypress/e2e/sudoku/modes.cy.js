/// <reference types="cypress" />
describe('Play mode', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('shows a different number of empty cells', () => {
        cy.get('.game__cell.game__cell--filled').should('have.length', 45).its('length').as('easy')
        cy.get('.status__difficulty-select').select('Medium')
        cy.get('.game__cell.game__cell--filled').should('have.length', 40).its('length').as('medium')
        cy.get('.status__difficulty-select').select('Hard')
        cy.get('.game__cell.game__cell--filled')
            .should('have.length', 30)
            .its('length')
            .as('hard')
            .then(function () {
                expect(this.easy, 'easy').to.be.greaterThan(this.hard)
            })
    })
})