/// <reference types="cypress" />

describe('Download Income Vs Expense Report', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });

    it('should click the download button', () => {
        // Visit the dashboard page
        cy.visit('https://iaoai.io/hrmsv2/dashboard');

        // Navigate to the 'Income Vs Expense' report section
        cy.contains('span.dash-mtext', 'Report').click();
        cy.contains('a', 'Income Vs Expense').click();

        // Wait for the report to load 
        cy.get('section.dash-container', { timeout: 10000 }).should('exist');

        // Click the download button 
        cy.xpath("//a[@onclick='saveAsPDF()']", { timeout: 10000 }).should('be.visible').click();

        // Set the date filters 
        cy.get('#start_month').clear().type('2025-06');
        cy.get('#end_month').clear().type('2025-08');
        cy.get('.btn.btn-sm.btn-primary').eq(1).click(); // Apply the filter

        // Assertion to ensure the report reflects the filtered duration
        cy.contains('Duration').parent().should('contain.text', 'Jun-2025 to Aug-2025');
    });
});
