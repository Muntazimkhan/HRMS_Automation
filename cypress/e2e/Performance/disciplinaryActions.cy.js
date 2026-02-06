/// <reference types="cypress" />

describe('Discilinary Actions' , () =>{
    beforeEach(() =>{
    cy.login(Cypress.env('VALID_EMAIL'), (Cypress.env('VALID_PASSWORD')));

})
    it('Disciplinary functionality', () =>{
        cy.contains('a.dash-link', 'Performance').should('be.visible').click();
        cy.contains('a', 'Disciplinary Actions').should('be.visible').click({ force: true });

        //Create a new disciplinary Action
        cy.get('.ti.ti-plus').click({force: true});
        cy.get('select[name="user_id"]').select('Tala Qadan')
        cy.get('#desciplinary_action').should('be.visible').clear().type('Test Disciplinary Action', { delay: 100, force: true });
        cy.get('#desciplinary_remarks').type('Test Disciplinary Remarks', { delay: 100, force: true });
        cy.get('#submitBtn').click();

        //Delete disciplinary Action
        cy.get('.ti.ti-trash.text-white.text-white').first().click();
        cy.wait(1000);
        cy.get('.swal2-confirm.btn.btn-success').click();
        
    })
})