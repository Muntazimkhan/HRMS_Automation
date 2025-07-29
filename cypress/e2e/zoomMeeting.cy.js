/// <reference types="cypress" />

describe('Zoom Meeting', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    })

    it('Check the Zoom  Meeting functionality', () => {
        cy.contains('span.dash-mtext', 'Zoom Meeting').click();

        //Create new Meeting
        cy.get('[data-title="Create New Zoom Meeting"]').click();
        cy.get('#title').should('be.visible').type('Test Meeting');
        cy.wait(2000);

        cy.get('.choices__inner').click();
        cy.get('.choices__list').should('be.visible').contains('Muntazim HR').click();

        cy.get('#current_date').type('2025-07-22T10:00');
        cy.get('#duration').type('30');
        cy.get('#password').type('ABCD1234');
        cy.get('.modal-footer > .btn-primary').click();

        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();

    })
})