/// <reference types="cypress" />

describe('Employee Goal Tracking', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    })

    it('Check the Employee Goal Tracking functionality', () => {
        cy.get('a.dash-link').contains('Performance').should('be.visible').click();
        cy.contains('a', 'Employee Goal Tracking').should('be.visible').click();

        //Create a new employee goal tracking
        cy.get('.ti.ti-plus').click();
        cy.get('.choices__inner').eq(0).click({ force: true });
        cy.get('.choices__list').contains('Abdellatif Hamed').click({ force: true });

        cy.get('.choices__inner').eq(1).click({ force: true });
        cy.get('.choices__list').contains('Temp Goal.').click({ force: true });

        cy.get('#start_date').type('2026-01-01');
        cy.get('#end_date').type('2026-10-10');
        
        cy.get('#subject').type('Test Subject')
        cy.get('#target_achievement').type('Test Target Achievement')

        cy.get('#description').type('Test Description')

        cy.get('#submitBtn').click();

        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.get('.swal2-confirm.btn.btn-success').click();
        
    })
})