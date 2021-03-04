import React from 'react';
import Box from '../../foundations/layout/box';
import Grid from '../../foundations/layout/grid';
import Text from '../../foundations/text';

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    nome: 'Greice',
    email: 'greicekellybc@gmail.com',
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
        variant="titleXS"
        tag="h1"
        color="tertiary.main"
      >
        ENVIEI SUA MENSAGEM
      </Text>
      <div>
        <input
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          placeholder="Mensagem"
          name="mensagem"
          value={userInfo.mensagem}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={isFormInvalid}>
        Enviar
      </button>
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
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="0px 1px 25px 5px rgba(0, 0, 0, 0.1)"
          borderRadius="10px 10px 0px 0px"
          display="flex"
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
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>

  );
}
