/// <reference types="cypress" />
describe('Job Application', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Job Application functionality', () => {
        cy.contains('a.dash-link', 'Recruitment').should('be.visible').click();
        cy.contains('a.dash-link', 'Application Process').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Job Application').should('be.visible');

        // // Create a mew Job Application
        // cy.get('[data-title="Create New Job Application"]').click();
        // cy.get('#jobs').should('be.visible').select('93');
        // cy.get('#name').type('Test Name', {force: true});
        // cy.get('#email').should('be.visible').type('Test@gmail.com');
        // cy.get('#phone').should('be.visible').type('0321654987');
        // cy.get('[type="submit"]').click();

        //Show and Delete Application
        cy.get('.feather.icon-more-vertical').first().click();
        cy.get('.ti.ti-eye').first().click();
        cy.get('h4').contains('Job Application Details').should('be.visible');

        //Add Job OnBoard

        cy.get('[data-title="Add to Job OnBoard"]').click();
        cy.get('#joining_date').clear().should('be.visible').type('2025-08-01');
        cy.get('#days_of_week').should('be.visible').type('5');
        cy.get('#salary').should('be.visible').type('5000');
        cy.get('#salary_type').select('12');
        cy.get('#salary_duration').select('Monthly');
        cy.get('#job_type').select('Full Time');
        cy.get('#status').select('Pending');
        cy.get('.modal-footer > .btn-primary').click();
        
    })
})