/// <reference types="cypress" />

describe('Absentees', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });

    it('Absentees functionality', () => {
    cy.get('.dash-link').contains('Timesheet').click();    
    cy.wait(1000);
    cy.get('.dash-link').contains('Attendance').click();
    cy.get('.dash-link').contains('Absentees').click();

    cy.contains('h4', 'Manage Absentees List').click();

    // //Accept Absentee
    // cy.get(".ti.ti-caret-right.text-white").first().click();
    // //Confirm alert
    // cy.on('window:confirm', (text) => {
    //  expect(text).to.equal('Are you sure you want to approve this absentee?')
    //  return true   
    // })

    //Filters

    cy.get('#month').type('2025-12');
    cy.get('#branch_id').select('Attache');
    cy.wait(1000); //wait for department to load
    cy.get('#department_id').select('CPU', { force: true });
    cy.wait(1000); //wait for employee to load
    cy.get('#employee_id').select('304', { force: true });
    cy.get('.ti.ti-search').click();

    //Export
    cy.get("input[value='Export']").click();

    })
});