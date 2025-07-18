describe('Interviewer Schedule', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Interviewer Schedule functionality', () => {
        cy.contains('a.dash-link', 'Recruitment').should('be.visible').click();
        cy.contains('a.dash-link', 'Interviewer Schedule').should('be.visible').click();
        cy.get('.m-b-10').contains('Manage Interview Schedule').should('be.visible');

        //Select Employee
        cy.get('#employee_dd').should('be.visible').select('565');
        cy.xpath("//tbody/tr[4]/td[2]").click();
        cy.xpath("//button[normalize-space()='Book Time Slot']").click();
        cy.get('.swal2-confirm').click();


    })
})