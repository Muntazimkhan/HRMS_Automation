/// <reference types="cypress" />

describe('Monthly Attendance', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Check Monthly Attendance functionality', () => {
    cy.contains('span.dash-mtext', 'Report').click();
    cy.contains('a', 'Monthly Attendance').click();

    // Download PDF
    cy.xpath("//a[@onclick='saveAsPDF()']//span[@class='btn-inner--icon']", { timeout: 10000 }).click();
    cy.wait(2000);

    // Export functionality
    cy.get('a.btn.btn-sm.btn-primary').eq(1).click();
    cy.wait(2000);

    // Filters
    cy.get('#month').clear().type('2025-06');

    cy.xpath("//select[@id='branch-select branch_id']").then(($select) => {
      const exists = [...$select[0].options].some(o => o.value === '37');
      if (exists) {
        cy.wrap($select).select('37');
      } else {
        cy.log('🚫 Branch option 37 not found');
      }
    });

    cy.get('#project_id').then(($select) => {
      const exists = [...$select[0].options].some(o => o.value === '67');
      if (exists) {
        cy.wrap($select).select('67');
      } else {
        cy.log('🚫 Project option 67 not found');
      }
    });

    cy.get('#department_id').then(($select) => {
      const exists = [...$select[0].options].some(o => o.value === '69');
      if (exists) {
        cy.wrap($select).select('69');
      } else {
        cy.log('🚫 Department option 69 not found');
      }
    });

    // Select employee from dropdown (if visible)
    cy.get('.choices__inner').click({ force: true });
    cy.get('.choices__list--dropdown').then($list => {
      if ($list.text().includes('Muntazim User')) {
        cy.wrap($list).contains('Muntazim User').click({ force: true });
      } else {
        cy.log('🚫 "Muntazim User" not found in employee dropdown');
      }
    });

    cy.get('.ti.ti-search').click();

    // Assertion
    cy.contains('Duration').parent().should('contain.text', 'Jun-2025');
  });
});
