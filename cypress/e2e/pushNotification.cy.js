/// <reference types="cypress" />

describe('Push Notifications', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    })

    it('Check the Push Notifications functionality', () => {
        cy.contains('span.dash-mtext', 'Push Notifications').click();
        cy.get('.m-b-10').contains('Manage Push Notifications').should('be.visible');

        //Create a new push notification
        cy.get('[data-title="Send New Push Notification"]').click();
        cy.get('#bulk_branch_id').select('38')

        cy.get('.choices__inner').eq(0).click();
        cy.get('.choices__list').should('be.visible').contains('SuvastuTech').click();

        cy.get('.choices__inner').eq(1).click();
        cy.get('.choices__list').should('be.visible').contains('Arshad').click();

        cy.get('#title').should('be.visible').type('Test Notification');
        cy.get('#description').should('be.visible').type('Test description for push notification');
        cy.get('[type="submit"]').click();

        //Rsend the push notification
        cy.get('[data-title="Resend Notification"]').last().click();

    })
})