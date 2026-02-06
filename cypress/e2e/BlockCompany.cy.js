/// <reference types="cypress" />

describe('Shift Roster', () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
  });

    it('Check the Block Company login Functionality', () => {
    cy.visit("https://stage-hrms.iaoai.io/login")
    cy.get('input[name="email"]').type("khalilaabad123@gmail.com")
    cy.get('input[name="password"]').type("Chs@2024$#")
    cy.get('button[type="submit"]').click()
    cy.get("#liveToast").should('contain', 'Your account has been blocked. Please contact support.').should('be.visible');

});
it('Check the Block Company users login Functionality', () => {
    cy.visit("https://stage-hrms.iaoai.io/login")
    cy.get('input[name="email"]').type("khalilaabad12123@gmail.com")
    cy.get('input[name="password"]').type("Chs@2024$#")
    cy.get('button[type="submit"]').click()

});
});
