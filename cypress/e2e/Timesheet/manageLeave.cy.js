/// <reference types="cypress" />

describe('Manage Leave ', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Navigates to Manage Leave page through menu', () => {
    cy.xpath("//li[contains(@class, 'dash-hasmenu')]/a/span[normalize-space()='Timesheet']").click({ force: true });
    cy.get('[style="display: block; box-sizing: border-box;"] > :nth-child(3) > .dash-link').click({ force: true });

    // Export Leaves
    cy.get('.btn.btn-sm.btn-primary').eq(1).click({ force: true });

    // Add new Leave and delete it
    cy.get("[data-title='Create New Leave']").click({ force: true });
    cy.contains('h5', 'Create New Leave').should('be.visible');    
    cy.get('.choices__inner').click({ force: true });
    cy.get('.choices__item--choice').contains('Abdellatif Hamed').click({ force: true });
    cy.get('#leave_type_id', { timeout: 10000 }).should('be.visible').select('3', { force: true }); 
    cy.get('#start_date').clear().type('2025-10-14');
    cy.get('#end_date').clear().type('2025-10-16');
    cy.get('#leave_reason').type('Testing Leave');
    cy.get('#remark').type('Testing Remarks');
    cy.get('#submitBtn').click({ force: true });

    cy.get("#employee").select('Abdellatif Hamed', { force: true });
    cy.xpath("//a[@onclick=\"document.getElementById('employee_filter').submit(); return false;\"]").click({ force: true });
    cy.get('.ti.ti-trash.text-white.text-white').eq(0).should('be.visible').click({ force: true });
    cy.get('.swal2-confirm.btn.btn-success').should('be.visible').click({ force: true });

  });
});
