/// <reference types = "cypress" />
describe('Register Test', () => {
    beforeEach(() => {
        cy.visit("https://stage-hrms.iaoai.io/register/en");
        cy.viewport(1440, 900);
    });
    it('Check Register functionality', () => {
    cy.get("#name").should('be.visible').type('Muntazim');
    cy.get("#email").should('be.visible').type('admin@chs.org');
    cy.get('[name="company_country"]').select('UK');
    cy.get("#password").should('be.visible').type('Dg^^UO9)%dsk${`a');
    cy.get("#confirm-password").should('be.visible').type('Dg^^UO9)%dsk${`a');
    cy.get("button[type='submit']").click();
    cy.get('.error > small').should('be.visible').contains('This email is already taken.');
 
    })
});