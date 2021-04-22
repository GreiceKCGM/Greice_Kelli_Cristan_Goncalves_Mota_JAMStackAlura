import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';
import TextField from './index';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Greice"
        onChange={() => {}}
        name="nome"
      />,

    );

    // screen.debug();

    const textField = screen.getByPlaceholderText(/nome/i);

    expect(textField).toMatchSnapshot();
  });
  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn();
        const valueMock = 'greicekelly@gmail.com';
        render(
          <TextField
            placeholder="Nome"
            value=""
            onChange={onChangeMock}
            name="name"
            isTouched
          />
          ,
        );

        const nomeField = screen.getByPlaceholderText(/nome/i);
        user.type(nomeField, valueMock);
        expect(onChangeMock).toHaveBeenCalledTimes(valueMock.length);
      });
    });
  });

  describe('when field is invalid', () => {
    test('displays the respective error message', () => {
      render(
        <TextField
          placeholder="Email"
          value="greicekelly@gmail.com"
          onChange={() => {}}
          name="email"
          isTouched
          error="Digite um e-mail válido"
        />,
      );

      const fieldEmail = screen.getByPlaceholderText(/email/i);
      expect(fieldEmail).toHaveValue('greicekelly@gmail.com');
      expect(screen.getByRole('alert')).toHaveTextContent('Digite um e-mail válido');
      expect(fieldEmail).toMatchSnapshot();
    });
  });
});
