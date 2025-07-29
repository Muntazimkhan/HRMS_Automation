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

    // Filter functionality
    cy.get('#month').clear().type('2025-06');

    cy.get('#branch').then(($select) => {
      const exists = [...$select[0].options].some(o => o.value === '46');
      if (exists) {
        cy.wrap($select).select('46');
      } else {
        cy.log('🚫 Branch option 46 not found');
      }
    });

    cy.get('.form-control.select.project_id').then(($select) => {
      const exists = [...$select[0].options].some(o => o.value === '70');
      if (exists) {
        cy.wrap($select).select('70');
      } else {
        cy.log('🚫 Project option 70 not found');
      }
    });

    cy.get('#department_id').then(($select) => {
      const exists = [...$select[0].options].some(o => o.value === '71');
      if (exists) {
        cy.wrap($select).select('71');
      } else {
        cy.log('🚫 Department option 71 not found');
      }
    });

    cy.get('#leave_type').then(($select) => {
      const exists = [...$select[0].options].some(o => o.text.includes('Full Day Leave'));
      if (exists) {
        cy.wrap($select).select('Full Day Leave');
      } else {
        cy.log('🚫 Leave type "Full Day Leave" not found');
      }
    });

    cy.xpath("//a[@class='btn btn-primary']").click();

    // Clear Filter
    cy.get('.btn.btn-danger').eq(0).click();
  });
});
