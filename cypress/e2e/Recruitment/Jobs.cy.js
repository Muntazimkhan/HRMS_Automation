/// <reference types="cypress" />
describe.skip('Jobs', () => {
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
        cy.get('#branch').should('be.visible').select('Attache');
        cy.get('#category').should('be.visible').select('Line');
        cy.get('#position').should('be.visible').type('3');
        cy.get('#status').should('be.visible').select('Active');
        cy.get('#start_date').clear().should('be.visible').type('2025-07-01');
        cy.get('#end_date').clear().should('be.visible').type('2025-07-27');
        cy.get('[name="skill"]').type('Test Skills');
        cy.get('.note-editable.card-block').eq(0).type('Test Description');
        cy.get('.note-editable.card-block').eq(1).type('Test Job Requirement');
        cy.get('#check-gender, #check-dob,#check-resume').check();

        //Custom Questions selection
        cy.get("#custom_question_1").check();
        cy.get('#custom_question_2').check();
        cy.get('#custom_question_3').check();   
        cy.get('#custom_question_6').check();
        cy.get('#custom_question_8').check();
        cy.get('#custom_question_9').check();
        cy.get('#custom_question_10').check();
        cy.get('#custom_question_11').check();
        cy.get('#custom_question_12').check();
        cy.get('#custom_question_286').check();  
        cy.get('#submitBtn').click();

        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').first().click();
        cy.wait(1000);
        cy.get('.swal2-confirm.btn.btn-success').click();
    })
})