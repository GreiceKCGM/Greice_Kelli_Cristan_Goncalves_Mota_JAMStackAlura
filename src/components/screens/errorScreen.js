import React from 'react';
import Box from '../foundations/layout/box';
import Grid from '../foundations/layout/grid';
import Text from '../foundations/text';

export default function ErrorScreen() {
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      textAlign="center"
      justifyContent="center"
    >
      <Grid.Col
        textAlign="center"
        justifyContent="center"
        flexDirection="column"
      >
        <img
          alt="Imagem de Error"
          src="https://img.freepik.com/vetores-gratis/pagina-de-erro-404-ou-arquivo-nao-encontrado-com-o-conceito-de-pessoas-ilustracao-para-pagina-da-web_173706-128.jpg?size=626&ext=jpg"
        />

        <Text
          variant="title"
          tag="h1"
          color="tertiary.main"
          textAlign="center"
        >
          PAGE NOT FOUND
        </Text>
      </Grid.Col>

    </Box>
  );
}
