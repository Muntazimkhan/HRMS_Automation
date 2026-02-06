/// <reference types="cypress" />

describe('User Management', () => {
    beforeEach(() => {
        cy.viewport(1440, 900);
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check User Management functionality', () => {
        // Navigate to User Management
        cy.contains('span.dash-mtext', 'Staff').click();
        cy.contains('a', 'User').click();

        //View User Logs History
        cy.get('.btn.btn-primary.btn-sm').click();
        cy.contains('h4', 'Manage User Logs History').should('be.visible');

        //Logs filters
        cy.get('input[name="month"]').type('2025-10');
        cy.get('#employee_id').select('Tala Qadan');
        cy.get('.ti.ti-search').click();

        //View and delete Logs
        // cy.get('.mx-3.btn.btn-sm.align-items-center').eq(0).click();
        cy.get('.ti.ti-trash.text-white.text-white').eq(0).click();
        cy.wait(1000);
        cy.get('.swal2-confirm.btn.btn-success').click();
        cy.get('.d-flex').should('contain.text', 'Employee successfully deleted.');


    });
});