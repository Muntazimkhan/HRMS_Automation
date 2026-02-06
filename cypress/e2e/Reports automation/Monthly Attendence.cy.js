/// <reference types="cypress" />

describe('Monthly Attendance', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Check Monthly Attendance functionality', () => {
    cy.contains('span.dash-mtext', 'Report').click();
    cy.contains('a', 'Monthly Attendance').click();

    // Filters
    cy.get('#month').clear().type('2025-07');
    //Select branch
    cy.get('select[id="branch-select branch_id"]').should('be.visible').select('Attache');
    //Select project
    cy.get("#project_id").should('be.visible').select('Attache');
    //Select department
    cy.get('#department_id').should('be.visible').select('CPU');
    cy.wait(2000)
    //Select employee
    cy.get('.choices__inner').click();
    // Wait for dropdown to appear
    cy.get('.choices__list', { timeout: 10000 }).should('be.visible');
    cy.contains('.choices__list', 'Zaki Takia', { timeout: 10000 }).click({ force: true });

    cy.get('.ti.ti-search').click();
  });
});
