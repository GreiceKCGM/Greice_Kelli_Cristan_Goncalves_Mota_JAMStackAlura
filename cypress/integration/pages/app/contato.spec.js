/// <reference types="cypress" />

import HomeScreenPageObject from '../../../../src/components/screens/home/homeScreen.pageObject';

describe('/pages/app/contato/', () => {
  describe('when to open, fill out and submit a contact request', () => {
    it('returns a message', () => {
      cy.intercept('https://contact-form-api-jamstack.herokuapp.com/message')
        .as('contact');

      const homeScreen = new HomeScreenPageObject(cy);
      homeScreen
        .accessTheContactForms()
        .fillTheContactForms({
          name: 'Bruce',
          email: 'brucep@abobrinha.com',
          message: 'Quero conhecer melhor seu trabalho',
        })
        .sendTheContactForms();

      cy.wait('@contact')
        .then(() => {
          cy.get('.lottie').should('exist');
        });
    });
  });
});
