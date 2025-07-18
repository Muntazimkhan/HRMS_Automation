/// <reference types="cypress" />
describe('Jobs', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Jobs functionality', () => {
        cy.contains('a.dash-link', 'Recruitment').should('be.visible').click();
        cy.contains('a.dash-link', 'Jobs').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Job').should('be.visible');

        //Create a new Job
        cy.get('[data-title="Create New Job"]').click();
        cy.get('#title').should('be.visible').type('Test Job');
        cy.get('#branch').should('be.visible').select('38');
        cy.get('#category').should('be.visible').select('23');
        cy.get('#position').should('be.visible').type('3');
        cy.get('#status').should('be.visible').select('Active');
        cy.get('#start_date').clear().should('be.visible').type('2025-07-01');
        cy.get('#end_date').clear().should('be.visible').type('2025-07-27');
        cy.get('[name="skill"]').type('Test Skills');
        cy.get('.note-editable.card-block').eq(0).type('Test Description');
        cy.get('.note-editable.card-block').eq(1).type('Test Job Requirement');
        cy.get('#check-gender, #check-dob,#check-resume').check();
        cy.xpath("//input[@id='custom_question_29']").check();
        cy.get('#submitBtn').click();

        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').first().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();
        cy.get('#liveToast').contains('Job successfully deleted.');



    })
})