/// <reference types="cypress" />

describe('Google Meet', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    })

    it('Check the Google Meet functionality', () => {
        cy.contains('span.dash-mtext', 'Google Meet').click();
        cy.get('.m-b-10').contains('Manage Meeting').should('be.visible');

        //Create new Meeting
        cy.get('[data-title="Create New Meeting"]').click();
        cy.get('#branch_id').select('38')
        cy.wait(2000);

        cy.get('.choices__inner').eq(0).click();
        cy.get('.choices__list').should('be.visible').contains('SuvastuTech').click();

        cy.get('.choices__inner').eq(1).click();
        cy.get('.choices__list').should('be.visible').contains('Muntazim Khan k36').click();

        cy.get("div[data-type='text'] div[class='choices__inner']").type('muntazimk36@gmail.com{enter}');

        cy.get('#title').should('be.visible').type('Test Meeting');
        cy.get('#currentDate').should('be.visible').type('2025-07-22');
        cy.get('#start_time').should('be.visible').clear().type('10:00');   
        cy.get('#end_time').should('be.visible').clear().type('22:00');
        cy.get('#note').should('be.visible').type('Test Note');
        cy.get('[type="submit"]').click();

        //Delete
        cy.get('.ti.ti-trash.text-white.text-white').last().click();
        cy.wait(2000);
        cy.get('.swal2-confirm.btn.btn-success').click();
    })
})