/// <reference types="cypress" />

describe('Complaint', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Complaint functionality', () => {
        cy.contains('a.dash-link', 'HR Admin Setup').should('be.visible').click();
        cy.get('.dash-trigger > .dash-submenu > :nth-child(6) > .dash-link').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Complaint').should('be.visible');

        //Create
        cy.get('[data-title="Create New Complaint"]').click();
        cy.get('#title').should('be.visible').type('Test Promotion');
        cy.get('#complaint_date').clear().should('be.visible').type('2025-011-01');
        cy.get('#description').should('be.visible').type('Test Description');
        cy.get('#submitBtn').click();
        cy.wait(2000);
        
        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();

    })
})