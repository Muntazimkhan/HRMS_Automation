/// <reference types="cypress" />

describe('Request', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    })

    it('Check the Tickets functionality', () => {
        cy.contains('span.dash-mtext', 'Request').click();
        cy.get('.m-b-10').contains('Manage Request').should('be.visible');

        //New Request
        cy.get('[data-title="Create New Request"]').click();
        cy.get('#request_type_id').should('be.visible').select('19');
        cy.get('#title').should('be.visible').type('Test Title', { force: true });

        cy.get('.choices__inner').eq(0).click();
        cy.get('.choices__list').should('be.visible').contains('Medium').click();

        cy.get('.choices__inner').eq(1).click();
        cy.get('.choices__list').should('be.visible').contains('Arshad').click();

        cy.get('#description').should('be.visible').type('Test Description');
       
        cy.get('.choices__inner').eq(2).click();
        cy.get('.choices__list').should('be.visible').contains('Pending').click();
        cy.get('label > .bg-primary').attachFile('Image.jpg');

        cy.get('#submitBtn').click();

        //Delete Request
        cy.get('.ti.ti-trash.text-white ').first().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();

    })
})