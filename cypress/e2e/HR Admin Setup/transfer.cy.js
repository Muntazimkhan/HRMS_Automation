/// <reference types="cypress" />

describe('Transfer Functionality', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Should create and delete a transfer successfully', () => {
    // Navigate to HR Admin Setup
    cy.get('#hr_admin').should('be.visible').click();
    
    // Click on "Manage Transfer"
    cy.xpath("//a[normalize-space()='Transfer']").should('be.visible').click();

    // Confirm we are on the "Manage Transfer" page
    cy.contains('.m-b-10', 'Manage Transfer').should('be.visible');
    
    // Create a new Transfer
    cy.get('[data-title="Create New Transfer"]').should('be.visible').click();

    // Select a Transfer Type
    cy.get('.choices__inner').eq(0).click();
    cy.get('.choices__list').contains('SuvastuTech_C').click(); 
    cy.get('body').click(10, 10); 

    // Select a department
    cy.get('#department_id').should('be.visible').select('SuvastuTech');

     // Ensure employee dropdown is ready
    cy.get('.employee_div > .choices > .choices__inner').should('be.visible').click();
    cy.wait(1000);
    cy.get('.choices__list').contains('Arshad').click({force: true}); 


    // Set transfer date and description
    cy.get('#transfer_date').should('be.visible').clear().type('2026-10-07', { force: true }).blur(); ;

    cy.get('#description').should('be.visible').type('Test Description');

    // Submit transfer
    cy.get('#submitBtn').should('be.visible').click();


    // Delete the transfer
    cy.get('.ti.ti-trash.text-white').first().click();

    // Wait for the Alert confirmation popup
    cy.get('.swal2-confirm.btn.btn-success').should('be.visible').click();

    // Ensure deletion confirmation
    cy.get('.d-flex').should('be.visible');
  });
});
