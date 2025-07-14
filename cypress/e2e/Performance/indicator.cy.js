/// <reference types="cypress" />

describe('Indicator', () =>{
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    })

    it('Check the Indicator functionality', () => {
    cy.get('a.dash-link').contains('Performance').should('be.visible').click();
    cy.contains('a', 'Indicator').should('be.visible').click();

    //Create a new indicator

    cy.get(".btn.btn-sm.btn-primary").click()
    cy.get('.form-group > .choices > .choices__inner').click();
    cy.wait(2000);
    cy.get('.choices__list--dropdown').contains('Client').click({force: true});

    cy.get('.choices__inner').eq(1).click()
    cy.wait(2000);
    cy.get('.choices__list--dropdown').contains('Project').click({force: true});

//     cy.get('#choices-multiple').click();
//   cy.contains('Designation', { timeout: 10000 }).click({ force: true });
//     // cy.wait(2000);
//     // cy.get('.choices__list--dropdown').contains('Designation').click({force: true});



    })
})