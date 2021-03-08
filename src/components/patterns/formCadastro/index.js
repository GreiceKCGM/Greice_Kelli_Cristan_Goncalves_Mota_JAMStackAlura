import React from 'react';
import { Lottie } from '@crello/react-lottie';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import Button from '../../commons/button/button';
import TextField from '../../forms/textField';
import Box from '../../foundations/layout/box';
import Text from '../../foundations/text';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  const [userInfo, setUserInfo] = React.useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  function emailIsInvalid() {
    return userInfo.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email);
  }

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  // eslint-disable-next-line max-len
  const isFormInvalid = userInfo.email.length === 0 || userInfo.nome.length === 0 || userInfo.mensagem.length === 0;
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      setIsFormSubmited(true);

      // Data transfer object
      const userDTO = {
        name: userInfo.nome,
        email: userInfo.email,
        message: userInfo.mensagem,
      };
      fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDTO),
      })
        .then((respostaDoServidor) => {
          if (respostaDoServidor.ok) {
            return respostaDoServidor.json();
          }
          throw new Error('Não foi possivel cadastrar o usuário agora ');
        })
        .then((respostaConvertidaEmObjeto) => {
          setSubmissionStatus(formStates.DONE);
          setUserInfo({ nome: '', email: '', mensagem: '' });
          // eslint-disable-next-line no-console
          console.log(respostaConvertidaEmObjeto);
        })
        .catch((error) => {
          setSubmissionStatus(formStates.ERROR);
          // eslint-disable-next-line no-console
          console.error(error);
        });
    }}
    >
      <Text
        variant="title"
        tag="h1"
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
          value={userInfo.nome}
          onChange={handleChange}
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
          value={userInfo.email}
          onChange={handleChange}
          paddingBottom="5px"
        />
        { emailIsInvalid() && (
        <Text
          variant="smallestException"
          tag="p"
          color="primary.main"
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
          value={userInfo.mensagem}
          onChange={handleChange}
          paddingBottom="50px"
        />
      </div>
      <Text
        variant="titleXS"
        tag="h1"
        color="primary.main"
        textAlign={{
          xs: 'center',
          md: 'center',
        }}
      >
        ENVIAR

        <Button
          type="submit"
          disabled={isFormInvalid}
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

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (

    <Box
      boxShadow="0px 1px 25px 5px rgba(0, 0, 0, 0.1)"
      borderRadius="10px 10px 0px 0px"
      flexDirection="column"
      justifyContent="center"
      flex={1}
      padding={{
        xs: '16px',
        md: '21px',
      }}
      backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
      {...propsDoModal}
    >
      {/* <Box textAlign="right">{modalPropsButtonClose}</Box> */}
      <FormContent />
    </Box>
  );
}
