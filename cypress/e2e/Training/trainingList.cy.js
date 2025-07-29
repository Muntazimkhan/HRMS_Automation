/// <reference types="cypress" />

describe('Training List', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Training List functionality', () => {
        cy.contains('a.dash-link', 'Training').should('be.visible').click();
        cy.contains('a.dash-link', 'Training List').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Training').should('be.visible');

        //Create a new Training
        cy.get(".btn.btn-sm.btn-primary[href='#']").click();
        cy.get(':nth-child(1) > .form-group > .choices > .choices__inner').click();
        cy.get('.choices__list').should('be.visible').contains('New_C').click();
        cy.get('#training_cost').should('be.visible').clear().type('1000');
        cy.get('#employee').select('565')
        cy.get('#start_date').should('be.visible').clear().type('2025-01-01');
        cy.get('#end_date').should('be.visible').clear().type('2025-07-15');
        cy.get('#description').should('be.visible').type('Test Description');
        cy.get('#submitBtn').click();

        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();
        cy.wait(2000);

        //Export
        cy.get('.ti.ti-file-export').click();



    })
})