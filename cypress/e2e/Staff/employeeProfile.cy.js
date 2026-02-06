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
        cy.xpath("//i[@class='ti ti-filter']").click({ force: true });
        cy.get('#branch_id').select('1')
        cy.xpath("//select[@id='department_id']").select('3');
        cy.get('#designation_id').select('2');
        cy.get('.ti.ti-search').click();

        // View Employee Profile
        cy.get('.btn.btn-outline-primary.mx-5').eq(0).click();
        cy.contains('h5', 'Personal Detail').should('be.visible');

    })

})