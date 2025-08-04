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
    cy.get('#month').clear().type('2025-06');

    cy.get('#branch').then(($select) => {
      const options = [...$select[0].options].map(o => o.value);
      cy.log('Branch options:', options);
      if (options.includes('37')) {
        cy.wrap($select).select('37');
      } else {
        cy.log('🚫 Branch option 37 not found');
      }
    });

    cy.get('.form-control.select.project_id').then(($select) => {
      const options = [...$select[0].options].map(o => o.value);
      cy.log('Project options:', options);
      if (options.includes('67')) {
        cy.wrap($select).select('67');
      } else {
        cy.log('🚫 Project option 67 not found');
      }
    });

    cy.get('#department_id').then(($select) => {
      const options = [...$select[0].options].map(o => o.value);
      cy.log('Department options:', options);
      if (options.includes('69')) {
        cy.wrap($select).select('69');
      } else {
        cy.log('🚫 Department option 69 not found');
      }
    });

    cy.get('#leave_type').then(($select) => {
      const texts = [...$select[0].options].map(o => o.textContent);
      cy.log('Leave Type options:', texts);
      if (texts.includes('Full Day Leave')) {
        cy.wrap($select).select('Full Day Leave');
      } else {
        cy.log('🚫 Leave type "Full Day Leave" not found');
      }
    });

    cy.xpath("//a[@class='btn btn-primary']").click();

    // Assertion
    cy.contains('Duration').parent().should('contain.text', 'Jun-2025');

    // Clear Filter
    cy.get('.btn.btn-danger').eq(0).click();
  });
});
