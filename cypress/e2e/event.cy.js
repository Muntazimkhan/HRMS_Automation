/// <reference types="cypress" />

describe('Event Management Test', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Should create a new event successfully', () => {
    // Navigate to Event Page
    cy.contains('span.dash-mtext', 'Event').click();
    cy.contains('.m-b-10', 'Event').should('be.visible');

    // Start Creating New Event
    cy.get('[data-title="Create New Event"]').click();

    // Select Branch
    cy.get('#branch_id').select('38');

    cy.wait(2000);
    // Select Department
    cy.get('.choices__inner').first().click({ force: true });
    cy.get('.choices__list').should('be.visible')
      .contains('SuvastuTech')
      .click({ force: true });

    // Click outside to close dropdown
    cy.get('body').click(10, 10);

    // Select Employee
    cy.get('.employee_div .choices__inner').click();
    cy.get('.choices__list').should('be.visible')
      .contains('Arshad')
      .click();

    // Fill Event Details
    cy.get('#title').should('be.visible').type('Test Event');
    cy.get('#start_date').clear().type('2025-07-01');
    cy.get('#end_date').clear().type('2025-09-01');
    cy.get('#start_time').clear().type('10:00');   
    cy.wait(1000); // Keep short and useful wait
    cy.get('#end_time').clear().type('22:00');     

    // Save Initial Form
    cy.get('.btn.bg-success.p-3').click();

    // Add Description and Submit
    cy.get('#description').should('be.visible').type('Test Description');
    cy.get('#submitBtn').click();
  });
});
