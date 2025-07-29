describe('Career', () => {
    beforeEach(() => {
        cy.login(Cypress.env('VALID_EMAIL'), Cypress.env('VALID_PASSWORD'));
    });

    it('Check the Career functionality', () => {
        cy.contains('a.dash-link', 'Recruitment').should('be.visible').click();
        cy.contains('a.dash-link', 'Career').should('be.visible').invoke('removeAttr', 'target').click();    
        cy.get('.btn.btn-primary.w-100.mt-4').eq(0).click();    
        cy.get('.btn.btn-primary.rounded').click();
        cy.get('#name').should('be.visible').type('Test Name');
        cy.get('#email').should('be.visible').type('Test@gmail.com');
        cy.get('#phone').should('be.visible').type('12301230123');
        cy.get("button[type='submit']").click();



    })
})