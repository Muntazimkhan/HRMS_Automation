/// <reference types="cypress" />

describe('Manage Expense', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });

    it('Check the manage Expense functionality', () => {
    cy.contains('span.dash-mtext', 'Finance').click();
    cy.get('.dash-trigger > .dash-submenu > :nth-child(6) > .dash-link').click();
    cy.get('.m-b-10').contains('Manage Expense').should('be.visible');   

    //Create new Expense
    cy.get('.ti.ti-plus').click()

    cy.get('.col-md-12 > .form-group > .choices > .choices__inner').click()
    cy.get('.choices__list--dropdown').should('be.visible').contains('.choices__item', 'Test Account').click()

    cy.get('#amount').should('be.visible').clear().type('1000');
    cy.get('#date').should('be.visible').type('2025-10-01');

    cy.get(':nth-child(4) > .form-group > .choices > .choices__inner').click()
    cy.get('.choices__list--dropdown').should('be.visible').contains('.choices__item', 'SuvastuTech_Expense').click()

    cy.get(':nth-child(5) > .form-group > .choices > .choices__inner').click()
    cy.get('.choices__list--dropdown').should('be.visible').contains('.choices__item', 'Muntazim Khan k36').click()

    cy.get(':nth-child(6) > .form-group > .choices > .choices__inner').click()
    cy.get('.choices__list--dropdown').should('be.visible').contains('.choices__item', 'SuvastuTech_Payment').click()

    cy.get('#referal_id').should('be.visible').type('123');
    cy.get('#description').should('be.visible').type('Test Description');
    // cy.get('#documents').attachFile('FKD.jpg');

    cy.get('[type="submit"]').click();
    cy.get('.d-flex').contains('Expense successfully created.');

    //Delete
    cy.get('.ti.ti-trash.text-white.text-white').first().click();
    cy.wait(2000);
    cy.get('.swal2-confirm.btn.btn-success').click();

    //Export
    cy.get('.btn.btn-sm.btn-primary').eq(1).click()

    //Show Logs

    cy.get('#show_expense_log').click();
    cy.wait(2000);

})
})