/// <reference types="cypress" />

describe('Employee Report', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });
    it('Check Employee Profile functionality', () => {
        // Navigate to Employee Profile
        cy.contains('span.dash-mtext', 'Staff').click();
        cy.contains('a', 'Employee Profile').click();

        //Filters functionality
        cy.get('.ti.ti-filter').click();
        cy.get('#branch_id').select('SuvastuTech_Client')
        cy.get(':nth-child(1) > .btn-box > #department_id').select('SuvastuTech_');
        cy.get('#designation_id').select('SuvastuTech_Designation');
        cy.get('.ti.ti-search').click();



        // View Employee Profile
        cy.get('.btn.btn-outline-primary.mx-5').eq(0).click();
        cy.contains('h5', 'Personal Detail').should('be.visible');

    })

})