/// <reference types="cypress" />
describe('Holiday', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Holiday functionality', () => {
        cy.contains('a.dash-link', 'HR Admin Setup').should('be.visible').click();
        cy.contains('a.dash-link', 'Holidays').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Holiday').should('be.visible');

        // Export 
        cy.get('.ti.ti-file-export').click()
        cy.wait(1000);

        //Import
        cy.get('.ti.ti-file-import').click({force: true});
        cy.wait(1000);

        cy.get('.choose-file > .form-label').click({ force: true });
        cy.wait(1000);

        // Upload file from fixtures
        cy.get('input[type="file"]').attachFile('holidays.csv');
        cy.wait(1000);
        cy.get('.modal-footer > .btn-primary').click();


        //Filter
        cy.get('#start_date').type('2025-04-01');
        cy.get('#end_date').type('2025-04-11');
        cy.get('.btn.btn-sm.btn-primary').eq(4).click();
        cy.get('.btn.btn-sm.btn-danger').click();

        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.wait(1000);
        cy.get('.swal2-confirm.btn.btn-success').click();

        //New Holiday Request
        cy.get('[data-title="Create New Holiday"]').click();
        cy.get('#occasion').should('be.visible').type('Test Occasion', { force: true });
        cy.get(':nth-child(2) > #start_date').clear().type('2025-04-05');
        cy.get(':nth-child(3) > #end_date').clear().type('2025-04-12');
        cy.get('#submitBtn').click();

    })
})  
