import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { ButtonWrapper } from '../../commons/button/button';
import TextField from '../../forms/textField';
import Text from '../../foundations/text';
import useform from '../../../infra/hooks/forms/useForm';
import { contactService } from '../../../services/contact/contactService';
import { FormAnimation } from './animation';

export const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required('Digite seu nome')
    .min(3, 'Preencha com seu nome'),
  email: yup
    .string()
    .required('Digite um e-mail válido')
    .email('Digite um e-mail válido'),
  message: yup
    .string()
    .required('Digite sua mensagem')
    .min(8, 'Preencha ao menos 8 caracteres'),

});

export default function FormContent({ onSubmit }) {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const form = useform({
    initialValues,
    onSubmit: (userInfo) => {
      setIsFormSubmited(true);
      form.setIsFormDisabled(true);
      setSubmissionStatus(formStates.LOADING);
      contactService.contact({
        name: userInfo.name,
        email: userInfo.email,
        message: userInfo.message,
      })
        .then(() => {
          setSubmissionStatus(formStates.DONE);
        })
        .catch(() => {
          setSubmissionStatus(formStates.ERROR);
        })
        .finally(() => {
          form.setIsFormDisabled(false);
        });
    },
    async validateSchema(userInfo) {
      return contactSchema.validate(userInfo, {
        abortEarly: false,
      });
    },
  });

  function resetForm() {
    if (submissionStatus !== formStates.ERROR) {
      form.handleReset();
    }

    setSubmissionStatus(formStates.DEFAULT);
    setIsFormSubmited(false);
  }

  // eslint-disable-next-line max-len

  return (
    <form
      id="formCadastro"
      onSubmit={onSubmit || form.handleSubmit}
    >
      <Text
        variant="titleXS"
        tag="h3"
        color="tertiary.main"
        textAlign="center"
        marginBottom="20px"

      >
        ENVIE SUA MENSAGEM
      </Text>

      <div>
        <Text
          variant="titleXS"
          tag="p"
          color="tertiary.main"
          marginBottom="6px"
        >
          Seu Nome
        </Text>
        <TextField
          paddingBottom="5px"
          placeholder="Nome"
          name="name"
          value={form.userInfo.name}
          error={form.errors.name}
          isTouched={form.touched.name}
          onChange={form.handleChange}
          onBlur={form.handleBlur}

        />
      </div>
      <div>
        <Text
          variant="titleXS"
          tag="p"
          color="tertiary.main"
          marginBottom="6px"
        >
          Seu E-mail
        </Text>
        <TextField
          paddingBottom="5px"
          placeholder="caio@example.com"
          name="email"
          value={form.userInfo.email}
          error={form.errors.email}
          isTouched={form.touched.email}
          onChange={form.handleChange}
          onBlur={form.handleBlur}

        />
        { form.emailIsInvalid() && (
        <Text
          variant="smallestException"
          tag="p"
          color="error.main"
          marginBottom="24px"
        >
          E-mail inválido!
        </Text>
        ) }
      </div>
      <div>
        <Text
          variant="titleXS"
          tag="p"
          color="tertiary.main"
          marginBottom="6px"
        >
          Sua Mensagem
        </Text>
        <TextField
          paddingBottom="50px"
          placeholder="Mensagem"
          name="message"
          value={form.userInfo.message}
          error={form.errors.message}
          isTouched={form.touched.message}
          onChange={form.handleChange}
          onBlur={form.handleBlur}

        />
      </div>
      <Text
        variant="titleXS"
        tag="h4"
        color="tertiary.main"
        textAlign={{
          xs: 'center',
          md: 'center',
        }}
      >
        <ButtonWrapper
          type="submit"
          disabled={form.isFormDisabled || form.isFormInvalid || form.emailIsInvalid()}
          variant="tertiary.light"
        >
          <Text
            color="black"
          >
            Enviar
          </Text>
        </ButtonWrapper>
      </Text>
      {isFormSubmited && submissionStatus !== formStates.DEFAULT && (
        <FormAnimation
          animationType={submissionStatus}
        />
      )}
      {/* w */}
      {/* <pre>
        {JSON.stringify(form.touched, null, 4)}
      </pre> */}
    </form>
  );
}

FormContent.defaultProps = {
  onSubmit: undefined,
};

FormContent.propTypes = {
  onSubmit: PropTypes.func,
};
