/// <reference types="cypress" />

describe('Leave', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Check Leave functionality', () => {
    cy.contains('span.dash-mtext', 'Report').click();
    cy.contains('a', 'Leave').click();

    // Download and Export functionality
    cy.xpath("//a[@class='btn btn-sm btn-primary']", { timeout: 10000 }).click();
    cy.wait(2000);
    cy.get('.btn.btn-sm.btn-primary.float-end').click();
    cy.wait(2000);

    // Filters
    cy.get('#month').clear().type('2025-07');
    //Select branch
    cy.get('[name="branch"]').should('be.visible').select('New_C');
    //Select project
    cy.get("#project_id").should('be.visible').select('Project');
    //Select department
    cy.get('#department_id').should('be.visible').select('Department');
    //Leave Type
    cy.get('[name="leave_type"]').should('be.visible').select('Full Day Leave', { force: true });

    cy.xpath("//a[@class='btn btn-primary']").click();

    // Assertion
    cy.contains('Duration').parent().should('contain.text', 'Jul-2025');

    // Clear Filter
    cy.get('.btn.btn-danger').eq(0).click();
  });
});
