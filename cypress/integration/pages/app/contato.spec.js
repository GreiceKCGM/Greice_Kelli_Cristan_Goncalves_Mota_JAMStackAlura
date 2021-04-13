/// <reference types="cypress" />

describe('/pages/app/contato/', () => {
  it('preencha os campos do formulário entre em contato', () => {
    cy.visit('http://localhost:3000');

    // // clicar no botão de entre em contato
    // // cy.get('Button[type="submit"]').click();
    // // preencher campo do nome
    // cy.get('#formCadastro input[name="nome"]').type('greice');
    // // preencher campo do email
    // cy.get('#formCadastro input[name="email"]').type('greice@gmail.com');
    // // preencher campo da mensagem
    // cy.get('#formCadastro input[name="mensagem"]').type('Estou entrando em contato');
    // // clicar no botão de enviar
  });
});
