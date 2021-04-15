import React from 'react';
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

export default function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  const initialValues = {
    name: '',
    email: '',
    mensagem: '',
  };

  // const userDTO = {
  //   name: userInfo.nome,
  //   email: userInfo.email,
  //   message: userInfo.mensagem,
  // };

  const form = useform({
    initialValues,
    onSubmit: (userInfo) => {
      setIsFormSubmited(true);
      contactService.contact({
        name: userInfo.nome,
        email: userInfo.email,
        message: userInfo.mensagem,
      })
        .then(() => {
          setSubmissionStatus(formStates.DONE);
          // setUserInfo({ nome: '', email: '', mensagem: '' });
        })
        .catch(() => {
          setSubmissionStatus(formStates.ERROR);
        });
    },

  });
  function emailIsInvalid() {
    return form.userInfo.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.userInfo.email);
  }

  // eslint-disable-next-line max-len
  const isFormInvalid = form.userInfo.email.length === 0 || form.userInfo.nome.length === 0 || form.userInfo.mensagem.length === 0;
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
          placeholder="Nome"
          name="nome"
          value={form.userInfo.nome}
          onChange={form.handleChange}
          paddingBottom="5px"
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
          placeholder="caio@example.com"
          name="email"
          value={form.userInfo.email}
          onChange={form.handleChange}
          paddingBottom="5px"
        />
        { emailIsInvalid() && (
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
          placeholder="Mensagem"
          name="mensagem"
          value={form.userInfo.mensagem}
          onChange={form.handleChange}
          paddingBottom="50px"
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
        ENVIAR

        <Button
          type="submit"
          disabled={isFormInvalid || emailIsInvalid()}
          variant="tertiary.light"
        >
          <Text
            color="tertiary.main"
          >
            {'>'}
          </Text>
        </Button>
      </Text>
      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}
      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: errorAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}
    </form>
  );
}
