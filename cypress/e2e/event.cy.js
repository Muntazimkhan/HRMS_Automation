/// <reference types="cypress" />

describe('Event', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    })

    it('Check the Event functionality', () => {
        cy.contains('span.dash-mtext', 'Event').click();
        cy.get('.m-b-10').contains('Event').should('be.visible');

        //New Event
        cy.get('[data-title="Create New Event"]').click();
        cy.get('#branch_id').select('38')
        cy.get('.choices__inner').click();
        cy.get('.choices__list').should('be.visible').contains('SuvastuTech').click();
        cy.get('body').click(0, 0);
        cy.get('.employee_div > .choices > .choices__inner').click();
        cy.get('.choices__list').should('be.visible').contains('Arshad').click();

        cy.get('#title').should('be.visible').type('Test Event');


    })
})