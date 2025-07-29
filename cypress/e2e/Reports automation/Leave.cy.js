/// <reference types="cypress" />

describe('Leave', () => {
    beforeEach(() => {
        // Ensure the user is logged in and set the viewport size before each test
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });
    it('Check Leave functionality', () => {
        cy.contains('span.dash-mtext', 'Report').click();
        cy.contains('a', 'Leave').click();

        //Download and Export functionality
        cy.xpath("//a[@class='btn btn-sm btn-primary']", { timeout: 10000 }).click();
        cy.wait(3000); // 
        cy.get('.btn.btn-sm.btn-primary.float-end').click();
        cy.wait(3000); 

        //Filters functionality
        cy.get('#month').clear().type('2025-06');
        cy.get('#branch').select('46');
        cy.wait(3000);
        cy.get(".form-control.select.project_id").select('70');
        cy.wait(2000);
        cy.get('#department_id').select('71');
        cy.get('#leave_type').select('Full Day Leave');
        cy.xpath("//a[@class='btn btn-primary']").click();

        //Clear Filter
        cy.get('.btn.btn-danger ').eq(0).click();
    });

})