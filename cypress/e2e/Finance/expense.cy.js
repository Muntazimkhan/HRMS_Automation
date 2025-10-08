/// <reference types="cypress" />

describe('Manage Expense', () => {
    beforeEach(() => {
        // Ensure the credentials are available in environment variables
        const email = Cypress.env('VALID_EMAIL');
        const password = Cypress.env('VALID_PASSWORD');

        cy.login(email, password);
        cy.viewport(1440, 900);
    });

    it('Check the manage Expense functionality', () => {
        // Wait and ensure Finance link is visible and clickable
        cy.contains('span.dash-mtext', 'Finance').should('be.visible').click();
        cy.get('.dash-trigger > .dash-submenu > :nth-child(6) > .dash-link')
            .should('be.visible')
            .click();

        // Ensure 'Manage Expense' is visible
        cy.get('.m-b-10').contains('Manage Expense').should('be.visible');   

        // Create new Expense
        cy.get('.ti.ti-plus').click();

        // Select account for expense (waiting for the dropdown)
        cy.get('.col-md-12 > .form-group > .choices > .choices__inner')
            .click()
            .get('.choices__list--dropdown').should('be.visible')
            .contains('.choices__item', 'Test Account')
            .click();

        // Amount and Date input
        cy.get('#amount').clear().type('1000');
        cy.get('#date').type('2025-10-01');

        // Select expense category
        cy.get(':nth-child(4) > .form-group > .choices > .choices__inner')
            .click()
            .get('.choices__list--dropdown').should('be.visible')
            .contains('.choices__item', 'SuvastuTech_Expense')
            .click();

        // Select user for expense
        cy.get(':nth-child(5) > .form-group > .choices > .choices__inner')
            .click()
            .get('.choices__list--dropdown').should('be.visible')
            .contains('.choices__item', 'Muntazim Khan k36')
            .click();

        // Select payment method
        cy.get(':nth-child(6) > .form-group > .choices > .choices__inner')
            .click()
            .get('.choices__list--dropdown').should('be.visible')
            .contains('.choices__item', 'SuvastuTech_Payment')
            .click();

        // Fill in the referral ID and description
        cy.get('#referal_id').clear().type('123');
        cy.get('#description').type('Test Description');

        // Attach file if needed in CI (ensure 'FKD.jpg' exists in the fixtures folder)
        // cy.get('#documents').attachFile('FKD.jpg');

        // Submit the form and confirm success message
        cy.get('[type="submit"]').click();
        cy.get('.d-flex').contains('Expense successfully created.');

        // Delete the expense
        cy.get('.ti.ti-trash.text-white.text-white').first().click();
        cy.get('.swal2-confirm.btn.btn-success').click();

        // Export the expense data (ensure the button is visible)
        cy.get('.btn.btn-sm.btn-primary').eq(1).should('be.visible').click();

        // Show logs (ensure button is visible)
        cy.get('#show_expense_log').click();
    });
});
