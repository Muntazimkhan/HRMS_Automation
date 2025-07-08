Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.Commands.add('login', (email, password) => {
  cy.visit("https://iaoai.io/hrmsv2/demo/login");  
  cy.get('#email').should('be.visible').type(email);  
  cy.get('#password').should('be.visible').type(password);  
  cy.get('button[type="submit"]').click(); 
});
require('cypress-xpath');
import 'cypress-downloadfile/lib/downloadFileCommand';
