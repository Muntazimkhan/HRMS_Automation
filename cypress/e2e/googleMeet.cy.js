/// <reference types="cypress" />

describe('Google Meet', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Check the Google Meet functionality', () => {
    // Navigate to Google Meet section
    cy.contains('span.dash-mtext', 'Google Meet').scrollIntoView().should('be.visible').click();
    cy.get('.m-b-10').contains('Manage Meeting').should('be.visible');

    // Click "Create New Meeting"
    cy.get('[data-title="Create New Meeting"]').should('be.visible').click();

    // Select branch
    cy.get('#branch_id').should('exist').select('New_C');

    // Select department
    cy.get("input[placeholder='Select Department']").should('be.visible').type('Department{enter}', { force: true });

    // Select employee
    cy.get("input[placeholder='Select Employee']").should('be.visible').type('Muntazim{enter}', { force: true });

    // Add attendee email
    cy.get("div[data-type='text'] input[aria-label='null']").should('be.visible')
      .type('arshad@gmail.com{enter}');

    // Fill meeting details
    cy.get('#title').should('be.visible').type('Test Meeting');
    cy.get('#currentDate').should('be.visible').clear().type('2025-07-22');
    cy.get('#start_time').should('be.visible').clear().type('10:00');
    cy.get('#end_time').should('be.visible').clear().type('22:00');
    cy.get('#note').should('be.visible').type('Test Note');

    // Submit form
    cy.get('[type="submit"]').should('be.visible').click();

    // Wait for meeting list to update
    cy.get('.ti.ti-trash.text-white').should('exist');

    // Delete the created meeting
    cy.get('.ti.ti-trash.text-white').last().should('be.visible').click();

    // Confirm deletion
    cy.get('.swal2-confirm.btn.btn-success').should('be.visible').click();

  });
});
