/// <reference types="cypress" />

describe('Assets', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    })

    it('Check the Company Policy functionality', () => {
        cy.contains('span.dash-mtext', 'Assets').click();
        cy.get('.m-b-10').contains('Manage Assets').should('be.visible');

        //Create a new asset
        cy.get('[data-title="Create Assets"]').click();

        cy.get('.choices__inner').eq(0).click();
        cy.get('.choices__list').should('be.visible').contains('Abdellatif Hamed').click();

        cy.get('.choices__inner').eq(1).click();
        cy.get('.choices__list').should('be.visible').contains('Computer').click({ force: true });

        cy.get('#amount').clear().type('100');
        cy.get('#support_until').clear().type('2026-10-01');
        cy.get('#attachment').attachFile('Image.jpg')
        cy.get('#description').should('be.visible').type('Test Description');
        cy.get('#submitBtn').click({ force: true });

        //Delete the asset
        cy.get('.ti.ti-trash.text-white.text-white').first().click();
        cy.wait(1000);
        cy.get('.swal2-confirm.btn.btn-success').click({ force: true });

        //Export the asset
        cy.get('.ti.ti-file-export').click();
        cy.wait(1000);
        cy.get('[data-title="Import  Asset CSV file"]').click({ force: true });
        cy.get('#file').attachFile('assets.csv');
        cy.get('[type="submit"]').click({ force: true });

    })
})