/// <reference types="cypress" />

describe('Company Policy', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    })

    it('Check the Company Policy functionality', () => {
        cy.contains('span.dash-mtext', 'Company Policy').click();
        cy.get('.m-b-10').contains('Manage Company Policy').should('be.visible');

        //Create a new Company Policy
        cy.get('[data-title="Create New Company Policy"]').click();
        cy.get('#branch').should('be.visible').select('38');
        cy.get('#title').should('be.visible').type('Test Policy', {force: true});
        cy.get('#description').should('be.visible').type('Test Description');
        cy.get('input#attachment').attachFile('Image.jpg', { force: true });
        cy.get('[type="submit"]').click();
        cy.wait(2000);

        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();


    })
})