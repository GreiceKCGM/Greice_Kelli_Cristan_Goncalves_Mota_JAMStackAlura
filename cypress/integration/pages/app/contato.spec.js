/// <reference types="cypress" />

import HomeScreenPageObject from '../../../../src/components/screens/home/homeScreen.pageObject';

describe('/pages/app/contato/', () => {
  it('preencha os campos do formulário entre em contato', () => {
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
