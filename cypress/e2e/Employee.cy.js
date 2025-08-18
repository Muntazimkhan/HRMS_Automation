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
    cy.wait(3000);
    cy.get('.float-end > [href="#"]').click();

    // Ensure popup is visible
    cy.contains('Import Employee CSV File').should('be.visible');

    // Upload the file using input[type="file"]
    cy.get('input[type="file"]').attachFile('employee-import.xlsx');

    // Click the Upload button
    cy.get('.modal-footer > .btn-primary').click();


    //Delete the imported employee
    cy.get('.ti.ti-trash.text-white.text-white').last().click();
    cy.wait(2000);
    cy.get('.swal2-confirm').click();

    
  });

  // Create a new employee
  it('Create a new employee', () =>{
    cy.contains('span.dash-mtext', 'Employee').click();

    cy.xpath("//section[@class='dash-container']//a[3]").click();
    cy.get('#name').type('Test Employee');
    cy.get('#phone').type('1234567890');
    cy.get('#dob').type('2001-03-20');   
    cy.get('.form-group .choices').eq(0).click();
    cy.get('.choices__list .choices__item').contains('Male').click({ force: true });
    cy.get('.choices__inner').eq(1).click();
    cy.get('.choices__list--dropdown .choices__item').contains('Pakistan').click({ force: true });
    cy.get("div[class='city_div'] div[class='choices__inner']").click()
    cy.get('.choices__list').contains('Mardan').click({ force: true });
    cy.get('#email').type('abcd@abcd.com');
    cy.get('#password').type('Manual@1aw');
    cy.get("div[class='national_div'] div[class='choices__inner']").click();
    cy.get('.choices__list').contains('Pakistani').click({ force: true });
    cy.get('.choices__inner').eq(4).click();
    cy.get('.choices__list').contains('Single').click({ force: true });
    cy.get('#number_of_dependents').type('012');
    cy.get('#emergency_mobile_1').type('1234567890');
    cy.get('#link_to_drive').type('https://www.google.com');
    cy.get('.choices__inner').eq(5).click();
    cy.get('.choices__list').contains('Contract').click({ force: true });
    cy.get('.choices__inner').eq(6).click();
    cy.get('.choices__list').contains('A1').click({ force: true });
    cy.get('.choices__inner').eq(7).click();
    cy.get('.choices__list').contains('Swat').click({ force: true });
    cy.get('.choices__inner').eq(8).click();
    cy.get('.choices__list').contains('Morning').click({ force: true });
    cy.get('#employee_address').type('123 Test Street, Test City');
    cy.get('#joining_date').type('2023-10-01');
    cy.get('#contract_expiry_date').type('2026-10-01');
    cy.get('#probation_period').type('2024-10-01');
    cy.get('.col-md-4 > .form-icon-user > .choices > .choices__inner').click();
    cy.get('.choices__list').contains('Arshad').click({ force: true });

    cy.get('input[type="file"][id="document[12]"]').attachFile('Image.jpg');
    cy.get('.bg-primary.document.cursor-pointer').scrollIntoView().click();
    cy.get('.form-group > .form-check-input').check();

    // Step 1: Open the "Select Client" dropdown
    cy.get('.choices__inner').eq(9).click({ force: true });
    // Step 2: Wait for dropdown list and click the correct entry
    cy.get('.choices__list--dropdown .choices__item').contains('New_C').scrollIntoView().click({ force: true });

    cy.get('.choices__inner').eq(10).click();
    cy.wait(3000);
    cy.get('.choices__list--dropdown .choices__item').contains(/^Project$/, { matchCase: false }).scrollIntoView().click({ force: true });

    cy.get('.sub_department_div .choices__inner').click({ force: true });

    // Wait for the dropdown list to be visible before selecting
    cy.get('.sub_department_div .choices__list--dropdown').should('be.visible');

    cy.get('.sub_department_div .choices__list--dropdown .choices__item').contains(/^New Depart$/, { matchCase: false }).click({ force: true });
    cy.get('.designation_div > .choices > .choices__inner').click();
    cy.wait(3000);
    cy.get('.choices__list').contains(/^Designation$/, { matchCase: false }).click({ force: true });

    cy.get('.float-end > .btn').click();

    //Delete the imported employee
    cy.get('.ti.ti-trash.text-white.text-white').last().click();
    cy.wait(2000);
    cy.get('.swal2-confirm').click();
    cy.get('.d-flex').should('contain.text', 'Employee successfully deleted.');


    })
})

