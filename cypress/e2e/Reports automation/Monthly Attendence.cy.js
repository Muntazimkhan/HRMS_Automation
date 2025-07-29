/// <reference types="cypress" />

describe('Monthly Attendance', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });
  
    it('Check Monthly Attendance functionality', () => {
        cy.contains('span.dash-mtext', 'Report').click();
        cy.contains('a', 'Monthly Attendance').click();

        //Download PDF
        cy.xpath("//a[@onclick='saveAsPDF()']//span[@class='btn-inner--icon']", { timeout: 10000 }).click();
        cy.wait(3000); 

        //Export functionality
        cy.get('a.btn.btn-sm.btn-primary').eq(1).click();
        cy.wait(3000); 
 
        //Filters
        cy.get('#month').clear().type('2025-06');

        cy.xpath("//select[@id='branch-select branch_id']").select('37');
        
        cy.get("#project_id").select('67');
        
        cy.get("#department_id").select('69');
        
        cy.get('.choices__inner').click({force: true});
        cy.get('.choices__list--dropdown').contains('Muntazim User').click({force: true});

        cy.get('.ti.ti-search').click();

        //Assertion
        cy.contains('Duration').parent().should('contain.text', 'Jun-2025');
    });
})
    