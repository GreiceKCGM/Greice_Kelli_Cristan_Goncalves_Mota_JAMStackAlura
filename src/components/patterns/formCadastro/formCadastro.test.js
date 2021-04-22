import React from 'react';
import user from '@testing-library/user-event';
import {
  act, render, screen, waitFor,
} from '../../../infra/test/testUtils';

import FormContent from './formContent';

const onSubmit = jest.fn();
onSubmit.mockImplementation((event) => {
  event.preventDefault();
});

describe('<FormContent />', () => {
  describe('when from fields are valid', () => {
    test('complete the sumission', async () => {
      await act(async () => render(
        <FormContent
          onSubmit={onSubmit}
        />,
      ));

      const submitButton = screen.getByRole('button', {
        name: /enviar/i,
      });

      expect(submitButton).toBeDisabled();

      const inputName = screen.getByPlaceholderText('Nome');
      user.type(inputName, 'Felizberto');
      await waitFor(() => expect(inputName).toHaveValue('Felizberto'));

      const inputEmail = screen.getByPlaceholderText('caio@example.com');
      user.type(inputEmail, 'caio@example.com');
      await waitFor(() => expect(inputEmail).toHaveValue('caio@example.com'));

      const inputMessage = screen.getByPlaceholderText('Mensagem');
      user.type(inputMessage, 'Entrar em Contato');
      await waitFor(() => expect(inputMessage).toHaveValue('Entrar em Contato'));

      expect(screen.getByRole('button')).not.toBeDisabled();

      user.click(screen.getByRole('button'));

      screen.debug();

      expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    describe('when the form fields are incorrect', () => {
      test('displays the respective errors', async () => {
        render(<FormContent onSubmit={onSubmit} />);

        const inputEmail = screen.getByPlaceholderText('caio@example.com');
        inputEmail.focus();
        inputEmail.blur();

        await waitFor(() => screen.getByRole('alert'));

        expect(screen.getByRole('alert')).toHaveTextContent('Digite um e-mail válido');
      });
    });
  });
});
