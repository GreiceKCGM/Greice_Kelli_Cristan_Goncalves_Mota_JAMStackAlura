/// <reference types="cypress" />

describe('/pages/app/contato/', () => {
  it('preencha os campos do formulário entre em contato', () => {
    cy.visit('http://localhost:3000');

    // // clicar no botão de entre em contato
    cy.contains('+').click();
    // // preencher campo do nome
    cy.get('input[name="nome"]').type('greice');
    // // preencher campo do email
    cy.get('input[name="email"]').type('greice@gmail.com');
    // // preencher campo da mensagem
    cy.get('input[name="mensagem"]').type('Estou entrando em contato');
    // // clicar no botão de enviar
    cy.contains('>').click();
  });
});
