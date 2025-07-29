/// <reference types="cypress" />
describe.skip('Job On-Boarding', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Job On-Boarding functionality', () => {
        cy.contains('a.dash-link', 'Recruitment').should('be.visible').click();
        cy.contains('a.dash-link', 'Job On-Boarding').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Job On-Boarding').should('be.visible');
        
        //create a new Job On-Boarding
        cy.get('[data-title="Create New Job On-Boarding"]').click();
        cy.xpath("//select[@id='application']").should('be.visible').select('408');
        cy.get('#joining_date').clear().should('be.visible').type('2025-08-01');
        cy.get('#days_of_week').should('be.visible').type('5');
        cy.get('#salary').should('be.visible').type('5000');
        cy.get('#salary_duration').select('Monthly');
        cy.get('#job_type').select('Full Time');
        cy.get('#status').select('Pending');
        cy.get('.modal-footer > .btn-primary').click();

        //delete
        cy.get('.ti.ti-trash.text-white.text-white').first().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();

    })
})