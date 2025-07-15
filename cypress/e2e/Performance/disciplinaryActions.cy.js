/// <reference types="cypress" />

describe('Discilinary Actions' , () =>{
    beforeEach(() =>{
    cy.login(Cypress.env('VALID_EMAIL'), (Cypress.env('VALID_PASSWORD')));

})
    it('Disciplinary functionality', () =>{
        cy.contains('a.dash-link', 'Performance').should('be.visible').click();
        cy.contains('a', 'Disciplinary Actions').should('be.visible').click();

        //Create a new disciplinary Action
        cy.get('.btn.btn-sm.btn-primary').click()
        cy.get(':nth-child(1) > .form-group > .form-icon-user > .form-control').select('1447')
        cy.get('#desciplinary_action').should('be.visible').clear().type('Test Disciplinary Action', { delay: 100, force: true });
        cy.get('#desciplinary_remarks').type('Test Disciplinary Remarks')
        cy.get('#submitBtn').click();

        //Delete disciplinary Action
        cy.get('.ti.ti-trash.text-white.text-white').first().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();
        cy.get('#liveToast').should('contain.text', 'Disciplinary Action deleted successfully');
        
    })
})