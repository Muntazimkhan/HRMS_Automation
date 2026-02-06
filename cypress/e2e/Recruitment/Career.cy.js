describe.skip('Career', () => {
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
        cy.xpath("//input[@id='dob']").type('2001-05-15');
        cy.get("label[for='g_male']").click();
        cy.get("#profile").attachFile('FKD.jpg');
        cy.get("#resume").attachFile('FKD.jpg');
        cy.get('input[name="question[Iqama number ( If Currently in KSA )]"]').should('be.visible').type('Test Answer');
        cy.get('input[name="question[Nationality]"]').should('be.visible').type('Test Answer');
        cy.get('input[name="question[Current Location]"]').should('be.visible').type('Test Answer');
        cy.get("input[name='question[WhatsApp Number]']").should('be.visible').type('1234');
        cy.get("input[name='question[Marital Status]']").should('be.visible').type('Single');
        cy.get("input[name='question[Current Salary]']").should('be.visible').type('1222');
        cy.get("input[name='question[Expected Salary]']").should('be.visible').type('13222');
        cy.get("input[name='question[Education Level]']").should('be.visible').type('BS');
        cy.get("input[name='question[Current Position]']").should('be.visible').type('QA');
        cy.get("input[name='question[Notice Period (If Currently Employed)]']").should('be.visible').type('1 Month');
        cy.get("button[type='submit']").click();



    })
})