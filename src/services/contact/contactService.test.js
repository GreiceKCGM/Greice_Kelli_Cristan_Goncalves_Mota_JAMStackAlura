import { contactService } from './contactService';

const contactMock = {
  data: {
    name: 'Felizberto',
    email: 'felizberto@qualquer.com',
    message: 'Olá, gostei do seu trabalho!',
  },
};

async function HttpClientModule() {
  return contactMock;
}

const FAIL_MESSAGE = 'Failed to send message!';

async function HttpClientModuleError() {
  throw new Error(FAIL_MESSAGE);
}

describe('contactService', () => {
  describe('contact()', () => {
    describe('When user so much to contact', () => {
      describe('Message sent successfully', () => {
        test('It continues the execution', async () => {
          // quanbdo o usuario manda uma mensagem
          const contactServiceResponse = await contactService.contact(
            contactMock, HttpClientModule,
          );
          expect(contactServiceResponse).toEqual(contactMock);
        });
      });

      describe('Failed to send', () => {
        test('Shows an error', async () => {
          // quando da um erro ao enviar a mensagem
          await expect(contactService.contact(contactMock, HttpClientModuleError))
            .rejects
            .toThrow(FAIL_MESSAGE);
        });
      });
    });
  });
});
