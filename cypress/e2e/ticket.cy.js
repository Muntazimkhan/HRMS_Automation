/// <reference types="cypress" />

describe('Tickets', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    })

    it('Check the Tickets functionality', () => {
        cy.contains('span.dash-mtext', 'Ticket').click();
        cy.get('.m-b-10').contains('Manage Ticket').should('be.visible');

        //Create New
        cy.get('.ti.ti-plus').click()
        cy.get('[id="title"]').should('be.visible').type('Test Ticket');
        cy.get('.choices__inner').eq(0).click();
        cy.get('.choices__list').should('be.visible').contains('Arshad').click();

        cy.get('.choices__inner').eq(1).click();
        cy.get('.choices__list').should('be.visible').contains('High').click();
        
        cy.get('#end_date').should('be.visible').clear().type('2026-09-01');
        cy.get('[id="description"]').type('Test Description' , { force: true });

        cy.get('.choices__inner').eq(2).click();
        cy.get('.choices__list').should('be.visible').contains('On Hold').click();

        cy.get('[type="submit"]').click();

        //Delete
        cy.get('.ti.ti-trash.text-white ').last().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();

    })
})