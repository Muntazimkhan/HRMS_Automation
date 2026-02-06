/// <reference types="cypress" />

describe('Manage Employee', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
  });

it('Check Employee Management functionality', () => {
  // Navigate to Employee Management
  cy.contains('span.dash-mtext', 'Employee').click();

  // Check import export functionality
  cy.get(".btn.btn-sm.btn-primary").eq(0).click();
  cy.xpath("//a[@data-url='https://stage-hrms.iaoai.io/import/employee/file']").click();

  // Ensure popup is visible
  cy.contains('Import Employee CSV File').should('be.visible');

  // Upload the file using input
  cy.get('input[type="file"]').attachFile('employee-import.xlsx');

  // Click the Upload button
  cy.get('.modal-footer > .btn-primary').click();
  
  // Delete the imported employee
  cy.get("input[placeholder='Search...']").type('Temp Mail..');
  cy.get('.ti.ti-trash.text-white.text-white').click();
  cy.get('.swal2-confirm').click();
});


  // Create a new employee
  it('Create a new employee', () => {
    cy.contains('span.dash-mtext', 'Employee').click();
    cy.get('[data-title="Create New Employee"]').click();

    // Personal Details
    cy.get('#name').type('Test Employee');
    cy.get('#phone').type('1234567890');
    cy.get('#dob').type('2001-03-20');

    cy.get('.form-group .choices').eq(0).click();
    cy.get('.choices__list .choices__item').contains('Male').click({ force: true });

    cy.get('.choices__inner').eq(1).click();
    cy.get('.choices__item').contains('Saudi Arabia').click({ force: true });

    cy.get("div.city_div .choices__inner").click();
    cy.get('.choices__item').contains('Afif').click({ force: true });

    cy.get('#email').type('abcd@abcd.com');
    cy.get('#password').type('Manual@1aw');

    cy.get(".national_div .choices__inner").click();
    cy.contains('.choices__item', 'Pakistani').click({ force: true });

    cy.get('.choices__inner').eq(4).click();
    cy.contains('.choices__item', 'Single').click({ force: true });

    cy.get('#number_of_dependents').type('012');
    cy.get('#emergency_mobile_1').type('1234567890');
    cy.get('#link_to_drive').type('https://www.google.com');

    cy.get('.choices__inner').eq(5).click();
    cy.contains('.choices__item', 'Contract').click({ force: true });

    cy.get('.choices__inner').eq(6).click();
    cy.get("#nationality_again").select("Saudi");
    cy.get("#registered_in_gosi").select("Yes");

    cy.contains('.choices__item', 'A1').click({ force: true });

    cy.get('.choices__inner').eq(7).click();
    cy.contains('.choices__item', 'Attache').click({ force: true });

    cy.get('.choices__inner').eq(8).click();
    cy.contains('.choices__item', '1AM-8AM').click({ force: true });

    cy.get('#employee_address').type('123 Test Street, Test City');

    // COMPANY DETAILS 

// Open Select Client
cy.get('.choices__inner').eq(9).click({ force: true });
// Select "Attache" from visible dropdown
cy.get('.choices__list--dropdown.is-active .choices__item').contains('Attache').click({ force: true });

cy.wait(1000)
// Open Select Company
cy.get('.choices__inner').eq(10).click({ force: true });
// Select "Attache"
cy.get('.choices__list--dropdown.is-active .choices__item').contains(/^Attache$/i).click({ force: true });

cy.wait(1000)
// Sub Department
cy.get('.sub_department_div .choices__inner').click({ force: true });
cy.get('.sub_department_div .choices__list--dropdown.is-active .choices__item').contains(/^CPU$/i).click({ force: true });

cy.wait(1000)
// Designation
cy.get('.designation_div .choices__inner').click({ force: true });
cy.get('.choices__list--dropdown.is-active .choices__item').contains(/^Accounts Payable$/i).click({ force: true });


    // Employment Details
    cy.get('#joining_date').type('2023-10-01');
    cy.get('#contract_expiry_date').type('2026-10-01');
    cy.get('#probation_period').select('90');

    cy.get('button[type="submit"]').scrollIntoView().click({ force: true });
    cy.wait(500);
    // Delete created employee
    cy.get("input[placeholder='Search...']").type('Test Employee');
    cy.wait(500);
    cy.get('.ti.ti-trash.text-white.text-white').click();
    cy.get('.swal2-confirm').click();
    cy.get('.d-flex').should('contain.text', 'Employee successfully deleted.');
  });
});