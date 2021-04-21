import React from 'react';
import * as yup from 'yup';
import { Lottie } from '@crello/react-lottie';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import Button from '../../commons/button/button';
import TextField from '../../forms/textField';
import Box from '../../foundations/layout/box';
import Text from '../../foundations/text';
import useform from '../../../infra/hooks/forms/useForm';
import { contactService } from '../../../services/contact/contactService';

const formStates = {
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

const FormAnimation = ({ message, animation }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
  >
    <Lottie
      width="150px"
      height="150px"
      className="lottie"
      config={{ animationData: animation, loop: false, autoplay: true }}
    />
    <Text
      variant="titleXS"
      tag="p"
      color="tertiary.main"
      marginBottom="6px"
    >
      { message }
    </Text>
  </Box>
);

export default function FormContent() {
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
        });
    },
    async validateSchema(userInfo) {
      return contactSchema.validate(userInfo, {
        abortEarly: false,
      });
    },
  });

  // eslint-disable-next-line max-len

  return (
    <form
      id="formCadastro"
      onSubmit={form.handleSubmit}
    >
      <Text
        variant="title"
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
          id="email"
          type="email"
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
          color="tertiary.main"
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
        <Button
          type="submit"
          disabled={form.isFormDisabled || form.isFormInvalid || form.emailIsInvalid()}
          variant="tertiary.light"
        >
          <Text
            color="tertiary.main"
          >
            Enviar
          </Text>
        </Button>
      </Text>
      {isFormSubmited && submissionStatus === formStates.LOADING && (
        <FormAnimation
          animation={errorAnimation}
          message="..."
        />
      )}
      {isFormSubmited && submissionStatus === formStates.DONE && (
        <FormAnimation
          animation={successAnimation}
          message="Mensagem enviada com sucesso!"
        />
      )}
      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <FormAnimation
          animation={errorAnimation}
          message="Mensagem não enviada, tente novamente!"
        />
      )}
      <pre>
        {JSON.stringify(form.touched, null, 4)}
      </pre>
    </form>
  );
}
