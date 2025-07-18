/// <reference types="cypress" />
describe('Custom Question', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Custom Question functionality', () => {
        cy.contains('a.dash-link', 'Recruitment').should('be.visible').click();
        cy.contains('a.dash-link', 'Custom Question').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Custom Question for interview').should('be.visible');

        //Create a new cutom question
        cy.get('[data-title="Create New Custom Question"]').click();
        cy.get('#question').should('be.visible').type('Test Question', {force: true});
        cy.get('#is_required').select('Yes');
        cy.get('[type="submit"]').click();

        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();
        cy.get('#liveToast').should('contain.text', 'Question successfully deleted.');
    })
})