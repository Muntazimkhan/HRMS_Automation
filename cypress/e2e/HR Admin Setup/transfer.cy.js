/// <reference types="cypress" />

describe.skip('Transfer Functionality', () => {
  beforeEach(() => {
    cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    cy.viewport(1440, 900);
  });

  it('Should create and delete a transfer successfully', () => {
    // Navigate to HR Admin Setup
    cy.get('#hr_admin').should('be.visible').click();

    // Click on "Manage Transfer"
    cy.xpath("//a[normalize-space()='Transfer']")
      .should('be.visible')
      .click();

    // Confirm page load
    cy.contains('.m-b-10', 'Manage Transfer')
      .should('be.visible');

    // Create new transfer
    cy.get('[data-title="Create New Transfer"]').click();

    // ---------- CLIENT ----------
    cy.get('.choices__inner').eq(0).should('be.visible').click();
    cy.get('.choices__list').should('be.visible').contains('Beast House').click({ force: true });

    // ---------- PROJECT ----------
    cy.xpath("//div[@id='project_div']//div[@class='choices__inner']").should('be.visible').click();
    cy.get('input[aria-label="Select Project"]').should('be.visible').type('Beast House{enter}')

    // ---------- DEPARTMENT ----------
    cy.xpath("//div[@id='department_div']//div[@class='choices__inner']").should('be.visible').click();
    cy.get("input[aria-label='Select Department']").should('be.visible').type('Back of House - BH{enter}');

    // ---------- DESIGNATION ----------
    cy.xpath("//div[@id='desingnation_div']//div[@class='choices__inner']").should('be.visible').click();
    cy.get("input[aria-label='Select Designation']").should('be.visible').type('Head Chef{enter}')

  cy.wait(1000);
    // ---------- EMPLOYEE ----------
    cy.xpath("//div[@class='employee_div']//div[@class='choices__inner']").should('be.visible').click();
    cy.get("input[aria-label='Select Employee']").should('be.visible').type('Fructoso Cruz{enter}')

cy.wait(1000);
    // ---------- NEW BRANCH ----------
cy.get(".choices__inner").eq(5).click({force: true});
cy.xpath("(//input[@aria-label='Select Client'])[2]").type('Beast House{enter}')

    // ---------- NEW PROJECT ----------
cy.get("div[id='new_project_div'] div[class='choices__inner']").click({force: true});
cy.get("input[aria-label='Select New Project']").type('Beast House{enter}')

    // ---------- NEW DEPARTMENT ----------
cy.xpath("//body[1]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]").click({force: true});
cy.get("input[aria-label='Select New Department']").type('Admin - BH{enter}')

    // ---------- NEW DESIGNATION ----------
cy.get("div[id='new_designation_div'] div[class='choices__inner']").click({force: true});
cy.get("div[id='new_designation_div'] input[aria-label='Select Designation']").type('Floor Manager{enter}')

    // ---------- TRANSFER DATE ----------
    cy.get('#transfer_date').should('be.visible').clear().type('2026-10-07').blur();

    // ---------- LINE MANAGER ----------
    cy.get('.choices__inner').eq(3).should('be.visible').click();

    cy.get('.choices__list')
      .should('be.visible')
      .contains('Abdullah al Mamun')
      .click({ force: true });

    // ---------- TRANSFER TYPE ----------
    cy.get('.choices__inner')
      .eq(4)
      .should('be.visible')
      .click();

    cy.get('.choices__list')
      .should('be.visible')
      .contains('Permanent')
      .click({ force: true });

    // ---------- SALARY ----------
    cy.get('#salary_increase')
      .should('be.visible')
      .click();

    cy.get('#new_salary')
      .should('be.visible')
      .clear()
      .type('7000');

    // ---------- DESCRIPTION ----------
    cy.get('#description')
      .should('be.visible')
      .type('Test Description');

    // ---------- SUBMIT ----------
    cy.get('#submitBtn')
      .should('be.enabled')
      .click();

    // Ensure transfer appears before deleting
    cy.get('.ti.ti-trash.text-white')
      .should('be.visible')
      .first()
      .click();

    // Confirm deletion
    cy.get('.swal2-confirm.btn.btn-success')
      .should('be.visible')
      .click();

    // Verify success UI
    cy.get('.d-flex')
      .should('be.visible');
  });
});