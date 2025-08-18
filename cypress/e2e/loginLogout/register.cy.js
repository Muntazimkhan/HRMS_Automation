/// <reference types = "cypress" />
describe('Register Test', () => {
    beforeEach(() => {
        cy.visit("https://stage-hrms.iaoai.io/register/en");
        cy.viewport(1440, 900);
    });
    it('Check Register functionality', () => {
    cy.get("#name").should('be.visible').type('Muntazim');
    cy.get("#email").should('be.visible').type('muntazim.khan+company@suvastutech.com');
    cy.get('[name="company_country"]').select('UK');
    cy.get("#password").should('be.visible').type('Info@2024#');
    cy.get("#confirm-password").should('be.visible').type('Info@2024#');
    cy.get("button[type='submit']").click();
    cy.get('.error > small').should('be.visible').contains('This email is already taken.');
 
    })
});