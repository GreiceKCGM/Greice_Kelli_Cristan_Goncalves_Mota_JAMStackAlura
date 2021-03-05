import React from 'react';
import Button from '../../commons/button/button';
import TextField from '../../forms/textField';
import Box from '../../foundations/layout/box';
import Grid from '../../foundations/layout/grid';
import Text from '../../foundations/text';

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    nome: '',
    email: '',
    mensagem: '',
  });

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
    }}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
        textAlign="center"
        marginBottom="51px"

      >
        ENVIE SUA MENSAGEM
      </Text>

      <div>
        <Text
          variant="titleXS"
          tag="p"
          color="tertiary.main"
          marginTop="20px"
          marginBottom="5px"
        >
          Seu Nome
        </Text>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <Text
          variant="titleXS"
          tag="p"
          color="tertiary.main"
          marginTop="20px"
          marginBottom="5px"
        >
          Seu email
        </Text>
        <TextField
          placeholder="caio@example.com"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <Text
          variant="titleXS"
          tag="p"
          color="tertiary.main"
          marginTop="20px"
          marginBottom="5px"
        >
          Sua mensagem
        </Text>
        <TextField
          placeholder="Mensagem"
          name="mensagem"
          value={userInfo.mensagem}
          onChange={handleChange}
          paddingBottom="60px"
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
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      maxWidth="auto"
      justifyContent="center"
      paddingLeft="24px"
      paddingRight="24px"
      alignContent="flex-end"
    >

      <Grid.Col
        display="flex"
        paddingRight="16px 16px 48px"
        flexDirection="column"
        value={{ xs: 12, md: 8, lg: 6 }}

      >

        <Box
          boxShadow="0px 1px 25px 5px rgba(0, 0, 0, 0.1)"
          borderRadius="10px 10px 0px 0px"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <Button>X</Button>
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>

  );
}
