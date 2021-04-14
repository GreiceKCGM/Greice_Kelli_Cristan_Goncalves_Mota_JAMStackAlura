// const userDTO = {
//   name: userInfo.nome,
//   email: userInfo.email,
//   message: userInfo.mensagem,
// };
async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        return respostaDoServidor.json();
      }
      throw new Error('Não foi possível enviar sua mensagem');
    });
}

export const contactService = {
  async contact({ name, email, message }) {
    return HttpClient('https://contact-form-api-jamstack.herokuapp.com/message', {
      method: 'POST',
      body: {
        name,
        email,
        message,

      },
    })
      .then((respostaConvertida) => {
        // eslint-disable-next-line no-console
        console.log(respostaConvertida);
        return respostaConvertida;
      });
  },
};
