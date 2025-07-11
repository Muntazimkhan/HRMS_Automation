/// <reference types="cypress" />

describe('Payslip Report', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
        cy.viewport(1440, 900);
    });
    it('Check the Payslip Report Functionality', () => {
        cy.contains('span.dash-mtext', 'Timesheet').click();
        cy.contains('a', 'Shift Roster').click();

    // Add new shift
    cy.get('.btn.btn-sm.btn-primary').click();
    cy.get('#title').type('Test Shift');
    cy.get('#shift_start_time').type('14:00');
    cy.get('#shift_end_time').type('20:00');
    cy.get('#shift_half_day_mark').type('16:00');
    cy.get('#early_clock_in').type('13');
    cy.get('#late_mark').type('11');
    cy.get('#early_leave').type('14');
    cy.get('#max_check_in').type('2');
    cy.get('#monday, #tuesday, #wednesday, #thursday, #friday').check({ force: true });
    cy.get('.modal-footer > .btn-primary').click();
    cy.wait(2000);

    // // Delete the shift
    cy.get('.ti.ti-trash.text-white').eq(4).click();
    cy.get('.swal2-confirm').click();
    cy.get('.d-flex').contains('Shift successfully deleted.').should('be.visible');
    cy.wait(2000);

    //View and Edit Shift
    cy.get('.mx-3.btn.btn-sm.align-items-center').eq(0).click();
    cy.contains('Shift Employees List').should('be.visible');
    cy.get('#commonModal > .modal-dialog > .modal-content > .modal-header > .btn-close').click();
    cy.get('.card-header > h5').contains('Company Shifts').should('be.visible');

    cy.get('.ti.ti-pencil.text-white').eq(1).click();
    cy.get('#title').should('be.visible').clear().invoke('val', 'Updated Morning Shift').trigger('input').trigger('change'); 
    cy.get('[type="submit"]').click();
    cy.get('#liveToast').contains('Shift successfully updated.').should('be.visible');

    //Remove and Assign Bulk Shift
    cy.get('#branch_id').select('Client');
    cy.get('#department_id').select('New Depart', {force: true});
    cy.get('#employee_id').select('Muntazim User',{force: true})
    cy.wait(2000);

    //Remove
    cy.get('.btn.btn-danger').click();
    cy.get('#bulk_branch_id').select('Client');
    cy.get('.choices__inner').click();
    cy.get('.choices__list--dropdown').contains('New Depart').click({force: true});
    cy.get('.bulk_employee_div > .choices > .choices__inner').click();
    cy.get('.choices__list--dropdown').should('be.visible').contains('Muntazim User').click({force: true});

    cy.get("div[class='form-icon-user'] div[class='choices__inner']").click();
    cy.get('.choices__list--dropdown').should('be.visible').contains('Evening shift').click({ force: true });
    cy.get('body').click(0, 0); 
    cy.get('[type="submit"]').click();

    //Assign
    cy.get('[data-url="https://iaoai.io/hrmsv2/shift/bulk/assign"]').click({force: true});
    cy.wait(2000);
    cy.get('#bulk_branch_id').select('Client');
    cy.get('.choices__inner').click();
    cy.get('.choices__list--dropdown').contains('New Depart').click({force: true});
    cy.get('.bulk_employee_div > .choices > .choices__inner').click();
    cy.get('.choices__list--dropdown').should('be.visible').contains('Muntazim User').click({force: true});

    cy.get("div[class='form-icon-user'] div[class='choices__inner']").click();
    cy.get('.choices__list--dropdown').should('be.visible').contains('Evening shift').click({ force: true });
    cy.get('body').click(0, 0); 
    cy.get('[type="submit"]').click();

    // Export
       cy.get('#exportBtn').click(); 

    });
});