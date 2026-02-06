/// <reference types="cypress" />

describe('Document', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    })

    it('Check the Document functionality', () => {
        cy.contains('span.dash-mtext', 'Document').click();
        cy.get('.m-b-10').contains('Manage Document').should('be.visible');

        //Add document
        cy.contains('span', 'Test Document').should('be.visible').click();
        cy.get('[data-title="Create New  Document Type"]').click();
        cy.get('#name').should('be.visible').type('Test Form');
        cy.get('#role').should('be.visible').select('hr');
        cy.get('#documents').attachFile('Image.jpg');
        cy.get('#description').should('be.visible').type('Test Description');
        cy.get('[type="submit"]').click();
        cy.get('.d-flex').contains('Document successfully uploaded.');

        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').click();
        cy.get('.swal2-confirm.btn.btn-success').click();
    })
      it('Bulk Upload', () =>{
        cy.contains('span.dash-mtext', 'Document').click();
        cy.get('.m-b-10').contains('Manage Document').should('be.visible');
        cy.contains('span', 'Test Document').should('be.visible').click();

        cy.get('[data-title="Bulk Create New Document Type"]').click();
        cy.get('#documents').attachFile('Image.jpg', 'FKD.jpg');
        cy.get('.modal-footer > .btn-primary').click();

        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.get('.swal2-confirm.btn.btn-success').click();

    })
})