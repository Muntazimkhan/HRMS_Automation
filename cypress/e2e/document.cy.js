/// <reference types="cypress" />

describe('Document', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    })

    it('Check the Document functionality', () => {
        cy.contains('span.dash-mtext', 'Document').click();
        cy.get('.m-b-10').contains('Manage Document').should('be.visible');

        // //Create a new Folder
        // cy.get('[data-title="Create New  Document Folder"]').click();
        // cy.get('#name').should('be.visible').type('Test Folder');
        // cy.get('[type="submit"]').click();

        //Add document
        cy.contains('span', 'New Folder').should('be.visible').click();
        cy.get('[data-title="Create New  Document Type"]').click();
        cy.get('#name').should('be.visible').type('Test Document');
        cy.get('#role').should('be.visible').select('89');
        cy.get('#documents').attachFile('Image.jpg');
        cy.get('#description').should('be.visible').type('Test Description');
        cy.get('[type="submit"]').click();
        cy.get('.d-flex').contains('Document successfully uploaded.');

        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();
    })
      it('Bulk Upload', () =>{
        cy.contains('span.dash-mtext', 'Document').click();
        cy.get('.m-b-10').contains('Manage Document').should('be.visible');
        cy.contains('span', 'New Folder').should('be.visible').click();

        cy.get('[data-title="Bulk Create New Document Type"]').click();
        cy.get('#documents').attachFile('Image.jpg', 'FKD.jpg');
        cy.get('.modal-footer > .btn-primary').click();

        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();

    })
})