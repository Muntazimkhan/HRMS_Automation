describe('Training List', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
  });

  it('Check the Training List functionality', () => {
    // Navigate to Training List
    cy.contains('a.dash-link', 'Training').should('be.visible').click();
    cy.contains('a.dash-link', 'Training List').should('be.visible').click();
    cy.contains('.m-b-10', 'Manage Training').should('be.visible');

    // Create a new Training
    cy.get("[data-title='Create New Training']").click();

    // Open the correct dropdown
    cy.get('.choices__inner').eq(0).should('be.visible').wait(1000).click({ force: true });

    // Select the value from the visible list
    cy.get('.choices__list').filter(':visible').contains('New_C').scrollIntoView().should('be.visible').click();

    // Click elsewhere to close dropdown
    cy.get('body').click(10, 10);

    // Enter training details
    cy.get('#training_cost').clear().type('1000');
    cy.wait(1000);
    cy.get('#employee').select('Muntazim Khan k36');
    cy.get('#start_date').clear().type('2025-01-01');
    cy.get('#end_date').clear().type('2025-12-15');
    cy.get('#description').type('Test Description');

    // Submit form
    cy.get('#submitBtn').click();

    // Delete the training
    cy.get('.ti.ti-trash.text-white').last().click();
    cy.get('.swal2-confirm.btn.btn-success').click();

    // Export
    cy.get('.ti.ti-file-export').click();
  });
});
