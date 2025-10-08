/// <reference types="cypress" />

describe('Internal Meeting', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('should create and delete an internal meeting', () => {
    // Go to Internal Meeting page
    cy.get('#internal_meeting').click();
    cy.contains('h4', 'Internal Meeting').click();

    // Open the modal to create new internal meeting
    cy.get('[data-title="Create New Internal Meeting"]').click();

    // Select client
    cy.get('#branch_id').select('New_C');

    // Select department
    cy.get('div.department_div .choices__inner').click({ force: true });

    cy.get('div.department_div').find('.choices__list--dropdown')
      .should('be.visible').should('not.be.empty');

    cy.get('div.department_div').contains('.choices__item', 'Department', { timeout: 10000 })
      .should('exist').click({ force: true });

    // Select employee
    cy.get('div.employee_div .choices__inner').click({ force: true });

    cy.get('div.employee_div').find('.choices__list--dropdown').should('be.visible').should('not.be.empty');

    cy.get('div.employee_div').contains('.choices__item', 'Muntazim Khan k36', { timeout: 10000 })
      .should('exist').click({ force: true });

    // Fill in meeting form
    cy.get('#title').type('Team Meeting');
    cy.get('#start_time').type('10:00');
    cy.get('#end_time').type('11:00');
    cy.get('#date').clear().type('2025-10-09');
    cy.get('#place').type('Meeting Room');
    cy.get('#description').type('Monthly Team Meeting to discuss project updates and goals.');

    // Submit
    cy.get('#submitBtn').click();

    // Delete the last meeting
    cy.get('.ti.ti-trash.text-white').last().scrollIntoView().click({ force: true });

    // Confirm deletion
    cy.get('button.swal2-confirm.btn.btn-success').click({ force: true });
  });
});
