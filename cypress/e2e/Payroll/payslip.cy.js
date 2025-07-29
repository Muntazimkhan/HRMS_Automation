/// <reference types="cypress" />

describe('Payslip Report', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });
    it('Check the Payslip Report Functionality', () => {
        cy.contains('span.dash-mtext', 'Payroll').click();
        cy.contains('a', 'Payslip').click();

        // Generate and Re-generate Payslip
        cy.get('#month').select('JUN');
        cy.get('#year').select('2025');
        cy.get('.btn.btn-primary.w-100').eq(0).contains('Generate Payslip').click();
        cy.wait(3000);
        cy.get('.btn.btn-primary.w-100').eq(1).contains('Re-generate Payslip').click();
        cy.wait(3000);
        cy.get('#flexRadioDefault3').check();
        cy.get('.modal-footer > .btn-primary').click();

    // Export Payslip
        cy.get('.form-control.month_date').eq(1).select('JUN');
        cy.get('.form-control.year_date').eq(1).select('2025');
        cy.get('.btn.btn-primary.w-100').eq(2).contains('Export').click();
        cy.wait(3000);
        cy.get('#wps_payslip_export_form > .btn').click();
    //Bulk Payment
        cy.get('#bulk_payment').click();  
        cy.get('[type="submit"]').contains('Bulk Payment').click();

    // View Payslip and delete Payslip
        cy.get(':nth-child(1) > :nth-child(7) > .btn-warning').click();
        cy.contains('Employee Payslip').should('be.visible');
        cy.get("a[title='Download Excel']").click();

    });
});