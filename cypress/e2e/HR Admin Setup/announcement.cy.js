/// <reference types="cypress" />
describe('Announcement', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Announcement functionality', () => {
        cy.contains('a.dash-link', 'HR Admin Setup').should('be.visible').click();
        cy.get('.dash-trigger > .dash-submenu > :nth-child(9) > .dash-link').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Announcement').should('be.visible');

        //create
        cy.get('[data-title="Create New Announcement"]').click();
        cy.get('#title').should('be.visible').type('Test Title');
        cy.get('#all_employees').should('be.visible').click();
        cy.get('#start_date').clear().should('be.visible').type('2025-01-01');
        cy.get('#end_date').clear().should('be.visible').type('2025-10-01');
        cy.get('#description').should('be.visible').type('Test Description');
        cy.get('#submitBtn').click();
        cy.get('.d-flex').contains('Announcement successfully created.');
        cy.wait(2000);
        
        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();
        cy.get('#liveToast').should('contain.text', 'Announcement successfully deleted.');
    })
})  