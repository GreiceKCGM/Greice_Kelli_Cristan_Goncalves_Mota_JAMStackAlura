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
      throw new Error('Failed to send message!');
    });
}

export default HttpClient;
