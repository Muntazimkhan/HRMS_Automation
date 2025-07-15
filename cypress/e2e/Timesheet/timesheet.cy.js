/// <reference types="cypress" />

describe('Timesheet Navigation', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Navigates to Timesheet page through menu', () => {
    // Step 1: Expand parent Timesheet dropdown
    cy.xpath("//li[contains(@class, 'dash-hasmenu')]/a/span[normalize-space()='Timesheet']").click({ force: true });

    // Step 2: Wait until the submenu is rendered
    cy.xpath("//ul[contains(@class,'dash-submenu') and contains(@style,'display: block')]").should('be.visible');

    // Step 3: Click the actual Timesheet submenu item
    cy.get('[style="display: block; box-sizing: border-box;"] > :nth-child(2) > .dash-link').click({ force: true });

    // Step 4: Confirm page has loaded
    cy.contains('h4', 'Manage Timesheet', { timeout: 10000 }).should('be.visible');
    
    //Import and Export functionality
    cy.get('.ti.ti-file-export').click();
    cy.wait(2000);
    cy.get('[data-url="https://iaoai.io/hrmsv2/import/timesheet/file"]').click({force: true});
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile('timesheet.csv');
    cy.wait(2000);
    cy.get('.modal-footer > .btn-primary').click();

    //Delete Employee

cy.get(".ti.ti-trash.text-white.text-white").eq(-2).click({ force: true });
cy.get('.swal2-confirm').click();
cy.get(".ti.ti-trash.text-white.text-white").eq(-1).click({ force: true });
cy.get('.swal2-confirm').click();

    //Filter
    cy.get('#current_date').type('2025-06-29');
    cy.get('#current_date').type('2025-07-10');
    cy.get('#employee_id').select('Muntazim Khan k36', { force: true });
    cy.get('.col-auto > .btn-primary').click();
    cy.wait(2000);

    // Reset Filter
    cy.get('.btn-danger').click();

    

  });
});
