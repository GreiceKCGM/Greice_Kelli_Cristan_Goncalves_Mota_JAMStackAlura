export default class HomeScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('/');
  }

  accessTheContactForms() {
    this.cy.contains('+').click();

    return this;
  }

  fillTheContactForms({ name, email, message }) {
    this.cy.get('input[name="name"]').type(name);
    this.cy.get('input[name="email"]').type(email);
    this.cy.get('input[name="mensagem"]').type(message);

    return this;
  }

  sendTheContactForms() {
    this.cy.contains('>').click();

    return this;
  }
}
