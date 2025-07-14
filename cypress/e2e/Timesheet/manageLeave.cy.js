/// <reference types="cypress" />

describe('Manage Leave ', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    }); 

    it('Navigates to Manage Leave page through menu', () => {
    cy.xpath("//li[contains(@class, 'dash-hasmenu')]/a/span[normalize-space()='Timesheet']").click({ force: true });
    cy.wait(2000);
    cy.get('[style="display: block; box-sizing: border-box;"] > :nth-child(3) > .dash-link').click({ force: true });

    //Export Leaves
    cy.get('.btn.btn-sm.btn-primary').eq(1).click();
    cy.wait(2000);

    //Change View
    cy.get('[href="https://iaoai.io/hrmsv2/calender/leave"]').click({force: true});
    cy.get('.btn.btn-sm.btn-primary').eq(0).click();
    cy.contains('Manage Leave').should('be.visible');

    //Add new Leave and delete it
    cy.get(".btn.btn-sm.btn-primary[href='#']").click();
    cy.contains('h5', 'Create New Leave').should('be.visible');    
    cy.get('.choices__inner').click();
    cy.get('.choices__item--choice').contains('Muntazim Khan k36').click();
    cy.get('#leave_type_id', { timeout: 10000 }).should('be.visible').select('27', { force: true }); 
    cy.get('#start_date').clear().type('2025-07-14');
    cy.get('#end_date').clear().type('2025-07-16');
    cy.get('#leave_reason').type('Testing Leave');
    cy.get('#remark').type('Testing Remarks');
    cy.get('#submitBtn').click();
    cy.wait(2000);
    cy.get('.ti.ti-trash.text-white.text-white').eq(0).click({ force: true });
    cy.get('.swal2-confirm.btn.btn-success').click();


    //Show Logs
    cy.get('.ti.ti-eye').click();
    cy.wait(2000);
    cy.contains('Approved At').should('be.visible');

    })

})