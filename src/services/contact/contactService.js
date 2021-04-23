import HttpClient from '../httpClient/httpClient';

export const contactService = {
  async contact({ name, email, message },
    HttpClientModule = HttpClient) {
    return HttpClientModule('https://contact-form-api-jamstack.herokuapp.com/message', {
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
