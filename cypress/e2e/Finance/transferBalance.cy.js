/// <reference types="cypress" />

describe('Manage Balance', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });

    it('Check the manage Balance functionality', () => {
    cy.contains('span.dash-mtext', 'Finance').click();
    cy.get('.dash-trigger > .dash-submenu > :nth-child(7) > .dash-link').click();
    cy.get('.m-b-10').contains('Manage Transfer Balance').should('be.visible'); 

    
    //Create a new entry
    cy.get('[data-title="Create New Transfer Balance"]').click();
    cy.get('.choices__inner').eq(0).click({force: true});
    cy.get('.choices__list').should('be.visible').contains('Test Account').click({force: true});   
    

// Open "To Account" dropdown
cy.get('[data-type="select-one"]').eq(1).click({ force: true });

// Select "Transfer Account"
cy.get('.choices__list--dropdown')
  .filter(':visible')
  .within(() => {
    cy.contains('.choices__item--selectable', 'Creative Hospitality Services Company').click({ force: true });
  });

    cy.get('#date').type('2025-10-01');
    cy.get('#amount').type('1000');

    // Open the "To Account" dropdown
    cy.get('[data-type="select-one"]').eq(2).click({force: true});
    // Type to search
    cy.get('[data-type="select-one"]').eq(2).find('input').type('Cash{downarrow}{enter}');

    cy.get('#referal_id').type('123');
    cy.get('#description').type('Test Transfer');
    cy.get('#submitBtn').click();

    //Delete
    cy.get('.ti.ti-trash.text-white.text-white').first().click();
    cy.wait(1000);
    cy.get('.swal2-confirm.btn.btn-success').click();

    })
})