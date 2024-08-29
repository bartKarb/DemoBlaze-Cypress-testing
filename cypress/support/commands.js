// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

export function registerUser(){
  const generatedUser = 'user' + Math.random().toString().slice(10);
  const generatedPassword = 'Password' + Math.random().toString().slice(10);

  cy.visit('https://www.demoblaze.com/');
  cy.get('#signin2')
    .click();
  cy.wait(1000);
  cy.get('#sign-username')
    .type(generatedUser);
  cy.wait(1000);
  cy.get('#sign-password')
    .type(generatedPassword);
  cy.wait(1000);
  cy.get('#signInModal > div > div > div.modal-footer > button.btn.btn-primary')
    .click();
};

export function logIn(username, password){
  cy.visit('https://www.demoblaze.com/');
  cy.get('#login2')
    .click();
  cy.wait(500);
  cy.get('#loginusername')
    .type(username);
  cy.get('#loginpassword')
    .type(password);
  cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary')
    .click();
};

export function buySamsung(){
  cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a')
    .click();
  cy.get('#tbodyid > div.row > div > a')
    .click();
  cy.get('#cartur')
    .click();
  cy.get('#page-wrapper > div > div.col-lg-8 > div > table')
    .should('contain', 'Samsung galaxy s6');
};
