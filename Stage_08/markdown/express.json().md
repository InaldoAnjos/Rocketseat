# app.use(express.json())

> A linha de código `app.use(express.json());` configura o Express para tratar o corpo das requisições HTTP como JSON. 

O Express, por padrão, não possui um mecanismo embutido para analisar o corpo das requisições no formato JSON. No entanto, muitas vezes é necessário receber dados em JSON nas requisições POST, PUT e PATCH, por exemplo, quando dados são enviados pelo cliente para o servidor.

Ao usar `express.json()`, o Express adiciona um middleware global que analisa o corpo das requisições recebidas pelo servidor e tenta interpretá-lo como JSON. Ele então disponibiliza os dados analisados através do objeto `req.body` nos manipuladores de rota subsequentes.

Com a configuração `express.json()`, você pode receber facilmente dados JSON nas suas rotas do Express, acessando-os por meio de `req.body`. Por exemplo, se você receber uma requisição POST com dados JSON no corpo, você poderá acessar esses dados usando `req.body`.

Aqui está um exemplo de uso:

```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  // Faça algo com os dados do novo usuário recebidos no corpo da requisição
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
```

Neste exemplo, o `express.json()` é chamado como um middleware antes de definir a rota `POST /api/users`. Ele permite que você acesse os dados JSON enviados no corpo da requisição através de `req.body`, onde você pode processar esses dados de acordo com a lógica do seu aplicativo.

Em resumo, a linha de código `app.use(express.json());` é usada para configurar o Express para analisar o corpo das requisições como JSON, permitindo que você receba e processe facilmente dados JSON nas suas rotas do Express.