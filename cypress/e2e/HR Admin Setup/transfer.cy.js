/// <reference types="cypress" />

describe('Transfer', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Transfer functionality', () => {
        cy.contains('a.dash-link', 'HR Admin Setup').should('be.visible').click();
        cy.get('.dash-trigger > .dash-submenu > :nth-child(2) > .dash-link').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Transfer').should('be.visible');

        //Create a new Transfer entry
        cy.get('[data-title="Create New Transfer"]').click();
        cy.get('.choices__inner').eq(0).click();
        cy.get('.choices__list').should('be.visible').contains('Client').click();
        cy.get('#department_id').select('67')

        cy.get('#transfer_date').should('be.visible').type('2025-10-01');
        cy.get('#description').should('be.visible').type('Test Description');
        cy.get('#submitBtn').click();
        cy.get('.d-flex').contains('Transfer successfully created.');
        cy.wait(2000);

        
        //Delete Transfer
        cy.get('.ti.ti-trash.text-white.text-white').first().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();
        cy.get('#liveToast').should('contain.text', 'Transfer successfully deleted.'); 
    })
})