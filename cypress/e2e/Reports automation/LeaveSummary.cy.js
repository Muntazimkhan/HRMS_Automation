/// <reference types="cypress" />

describe('Leave Summary Report', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

it('Leave Summary', function() {
    cy.contains('span.dash-mtext', 'Report').click();
    cy.contains('a', 'Leave Summary').click();
    cy.contains('Manage Leave Summary Report').should('be.visible');

    //Filter by Date Range
    cy.get('#month_from').type('2025-10');
    cy.get('#month_to').type('2025-12');

    cy.get(".choices__inner").click().type('Tala Qadan{enter}');
    cy.get('.btn.btn-primary[href="#"]').click();

    cy.get(".ti.ti-eye.text-white").click();
    cy.contains("All Leave Detail").should('be.visible');
});
});
