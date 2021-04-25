export default class HomeScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('http://localhost:3000/');
  }

  accessTheContactForms() {
    this.cy.contains('+').click();

    return this;
  }

  fillTheContactForms({ name, email, message }) {
    this.cy.get('input[name="name"]').type(name);
    this.cy.get('input[name="email"]').type(email);
    this.cy.get('input[name="message"]').type(message);

    return this;
  }

  sendTheContactForms() {
    // this.cy.get('.button__ButtonWrapper > ').click();
    this.cy.get('#formCadastro button[type="submit"]').click();
    // this.cy.get('button__ButtonWrappe').type('submit').click();

    return this;
  }
}
