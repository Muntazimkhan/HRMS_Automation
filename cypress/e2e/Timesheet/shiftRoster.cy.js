/// <reference types="cypress" />

describe('Shift Roster', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Check the Shift Roster Functionality', () => {
    cy.contains('span.dash-mtext', 'Timesheet').click();
    cy.contains('a', 'Shift Roster').click();

    // Add new shift
    cy.get('[data-title="Create Shift"]').click();
    cy.get('#title').type('New Testing Shift', { delay: 100, force: true });
    cy.get('#shift_start_time').type('14:00', { force: true });
    cy.get('#shift_end_time').type('20:00');
    cy.get('#shift_half_day_mark').type('16:00');
    cy.get('#early_clock_in').type('13');
    cy.get('#late_mark').type('11');
    cy.get('#early_leave').type('14');
    cy.get('#max_check_in').type('2');
    cy.get('#monday, #tuesday, #wednesday, #thursday, #friday')
      .check({ force: true });
    cy.get('.modal-footer > .btn-primary').click();

    cy.get('#liveToast')
      .should('contain', 'Shift successfully created')
      .should('be.visible');

    // Delete the shift
    cy.get("input[placeholder='Search...']").type('New Testing Shift');
    cy.get('.ti.ti-trash.text-white').last().click();
    cy.get('.swal2-confirm').click();
    cy.get('.d-flex').contains('Shift successfully deleted.').should('be.visible');
  });

  it('Check the Bulk Shift Functionality', () => {
    cy.contains('span.dash-mtext', 'Timesheet').click();
    cy.contains('a', 'Shift Roster').click();

    // Edit shift
    cy.get('.ti.ti-pencil.text-white').eq(1).click();
    cy.get('#title').should('be.visible').clear().type('Updated CHS Shift', { delay: 100, force: true });
    cy.get('[type="submit"]').click();

    // Remove Bulk Shift
    cy.get('#branch_id').select('Attache');
    cy.get('#department_id').select('CPU', { force: true });
    cy.get('#employee_id').select('Zaki Takia', { force: true });

    cy.get('.btn.btn-danger').click();
    cy.get('#bulk_branch_id').select('Attache');
    cy.get('.choices__inner').click();
    cy.get('.choices__list--dropdown')
      .contains('CPU')
      .click({ force: true });

    cy.get('.bulk_employee_div > .choices > .choices__inner').click();
    cy.get('.choices__list--dropdown')
      .should('be.visible')
      .contains('Zaki Takia')
      .click({ force: true });

    cy.get("div[class='form-icon-user'] div[class='choices__inner']").click();
    cy.get('.choices__list--dropdown')
      .should('be.visible')
      .contains('16:00PM - 1:00AM')
      .click({ force: true });
    cy.get('body').click(0, 0);
    cy.get('[type="submit"]').click();

    // Assign Bulk Shift
    cy.get('[data-title="Assign Single/Bulk Shift"]').click({ force: true });
    cy.get('#bulk_branch_id').select('Attache');
    cy.get('.bulk_department_div > .choices > .choices__inner').click({ force: true });
    cy.get('.choices__list').contains('CPU').click({ force: true });
    cy.get('.bulk_employee_div > .choices > .choices__inner').click({ force: true });
    cy.get('.choices__list').contains('Zaki Takia').click({ force: true });
    cy.get("div[class='form-icon-user'] div[class='choices__inner']").click();
    cy.get('.choices__list--dropdown')
      .should('be.visible')
      .contains('16:00PM - 1:00AM')
      .click({ force: true });
    cy.get('body').click(0, 0);
    cy.get('[type="submit"]').click();
  });

  it('Check the Shift Import Functionality', () => {
    cy.contains('span.dash-mtext', 'Timesheet').click();
    cy.contains('a', 'Shift Roster').click();

    // Import Permanent Shift
    cy.get('[data-title="file Import to assign Shift"]').scrollIntoView().click();
    cy.get('#permanent_shift_file').attachFile('permanent_shift.xlsx');
    cy.get('[type="submit"]').click();
    cy.contains('Permanent shifts imported successfully.').should('be.visible');
    cy.wait(1000);

    // Import Date Range Shifts
    cy.get('[data-title="file Import to assign Shift"]').click();
    cy.get('#date_range_shift_file').attachFile('date_range_shift.xlsx');
    cy.get('[type="submit"]').click();
    cy.wait(1000);

    // Import Weekly Shifts
    cy.get('[data-title="file Import to assign Shift"]').click();
    cy.get('#weekly_shift_file').attachFile('weekly_shift.xlsx');
    cy.get('[type="submit"]').click();
  });
});
