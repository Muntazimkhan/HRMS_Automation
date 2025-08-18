/// <reference types="cypress" />

describe('Google Meet', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Check the Google Meet functionality', () => {
 // Navigate to Google Meet section
    cy.contains('span.dash-mtext', 'Google Meet').click();
    cy.get('.m-b-10').contains('Manage Meeting').should('be.visible');

    // Create new Meeting
    cy.get('[data-title="Create New Meeting"]').should('be.visible').click();

    cy.get('#branch_id').should('exist').select('37');

    cy.wait(2000);

    cy.get('.department_div > .choices > .choices__inner').click({ force: true });
    cy.get('.choices__list').contains('Project').should('be.visible').click({ force: true });
    cy.wait(2000);

    cy.get("div[class='employee_div'] div[class='choices__inner']").click({ force: true });
    cy.get('.choices__list').contains('Muntazim Khan k36').should('be.visible').click({ force: true });

    cy.get("div[data-type='text'] input[aria-label='null']").should('be.visible').type('muntazimk36@gmail.com{enter}', { force: true });

    cy.get('#title').should('be.visible').type('Test Meeting');
    cy.get('#currentDate').should('be.visible').clear().type('2025-07-22');
    cy.get('#start_time').should('be.visible').clear().type('10:00');
    cy.get('#end_time').should('be.visible').clear().type('22:00');
    cy.get('#note').should('be.visible').type('Test Note');

    cy.get('[type="submit"]').should('be.visible').click();

    // Wait for meeting list to refresh
    cy.wait(2000);

    // Confirm deletion
    cy.get('.ti.ti-trash.text-white.text-white')
      .last()
      .should('be.visible')
      .click({ force: true });

    cy.get('.swal2-confirm.btn.btn-success')
      .should('be.visible')
      .click();
  });
});
