/// <reference types="cypress" />

describe('Employee Report', () =>{
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });

    it('Check employee report functionality', () => {
       cy.contains('span.dash-mtext', 'Report').click();
       cy.contains('a', 'Employee').click();
       
       // Download and Export functionality
       cy.get('.btn.btn-sm.btn-primary.float-end').eq(0).click();
       cy.wait(3000);        
       cy.get('button[type="submit"]').click();

       // Filters functionality
       cy.get('#dob_from').type('2001-01-14');
       cy.get('#dob_to').type('2001-01-16');
       cy.get('.btn.btn-primary').eq(2).click()

       // Assertion
       cy.get('tbody > tr > :nth-child(2)').should('contain.text', 'Muntazim Khan k36');

       //View Employee Details
       cy.get(".btn.btn-sm.btn-outline-primary ").click();

       cy.get(".drp-text.hide-mob.text-primary").eq(0).should('contain.text', 'Joining Letter');
    })
})