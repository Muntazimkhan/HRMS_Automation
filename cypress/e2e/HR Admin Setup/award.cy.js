/// <reference types="cypress" />

describe('Award', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Award functionality', () => {
        cy.contains('a.dash-link', 'HR Admin Setup').should('be.visible').click();
        cy.contains('a.dash-link', 'Award').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Award').should('be.visible');

        //Create a new Award
        cy.get('[data-title="Create New Award"]').click();
        cy.get('#date').should('be.visible').type('2026-10-01');
        cy.get('[name="gift"]').type('Test Gift');

        cy.get(".choices__inner").click({force: true});
        cy.get('.choices__list').contains('Monthly').click({force: true});

        cy.get('#description').should('be.visible').type('Test Description');
        cy.get('#submitBtn').click();
        cy.wait(1000);
        
        //Delete Award
        cy.get('.ti.ti-trash.text-white.text-white').first().click();
        cy.wait(1000);
        cy.get('.swal2-confirm.btn.btn-success').click();

  })
})