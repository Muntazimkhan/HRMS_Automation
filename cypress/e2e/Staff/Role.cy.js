/// <reference types="cypress" />

describe('User Roles', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check User Roles functionality', () => {
        // Navigate to User Roles
        cy.contains('span.dash-mtext', 'Staff').click();
        cy.contains('a', 'Role').click();

        //Create a new role
        cy.get('.ti.ti-plus').click();
        cy.get('#name').type('Test Role');
        cy.get('#checkall').click();
        cy.get('input[type="submit"]').scrollIntoView().click();
        cy.wait(2000);
        // Assert that the role was created successfully
        cy.get('.d-flex').should('contain.text', 'Role successfully created.');

        //delete the created role
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.wait(2000);
        cy.get('.swal2-confirm').click();
        cy.get('.d-flex').should('contain.text', 'Role successfully deleted.');

});
});