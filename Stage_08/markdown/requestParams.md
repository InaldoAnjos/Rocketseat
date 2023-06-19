# Request Params

> Em uma aplicação web, é comum que as requisições HTTP incluam informações adicionais que são enviadas para o servidor juntamente com a URL. Essas informações podem ser usadas para personalizar a requisição e influenciar o comportamento do servidor.

Os "request params" são um tipo de parâmetro que é enviado na URL da requisição. Eles são usados para transmitir dados específicos relacionados à requisição. Geralmente, os "request params" são usados em requisições GET, embora também possam ser usados em outras requisições HTTP, como POST, PUT ou DELETE.

Os "request params" são especificados na forma de uma string de consulta (query string) anexada à URL. A string de consulta começa com um ponto de interrogação "?" e é composta por pares chave-valor separados por "&". Cada par chave-valor representa um parâmetro de requisição, onde a chave é o nome do parâmetro e o valor é o valor associado a ele.

Aqui está um exemplo de uma URL com "request params":

```
https://www.example.com/search?keyword=banana&page=1
```

Neste exemplo, a URL contém dois "request params": "keyword" e "page". O valor do "request param" "keyword" é "banana" e o valor do "request param" "page" é "1". Esses "request params" podem ser usados pelo servidor para realizar uma busca baseada na palavra-chave "banana" e para retornar a primeira página de resultados.

No lado do servidor, a aplicação web pode acessar esses "request params" para obter os valores enviados pelo cliente. Dependendo da linguagem ou framework utilizado, a obtenção dos "request params" pode variar. No entanto, a maioria das linguagens e frameworks web fornece mecanismos para acessar e processar esses parâmetros de forma conveniente.

Por exemplo, em Node.js com o framework Express, você pode acessar os "request params" usando o objeto "req.params" para "request params" dinâmicos definidos na rota, ou usando o objeto "req.query" para a string de consulta completa.

Em resumo, os "request params" são parâmetros de requisição enviados na URL de uma requisição HTTP. Eles são usados para transmitir informações específicas para o servidor e são frequentemente usados em requisições GET. Os "request params" são acessíveis pelo servidor e podem ser usados para personalizar a resposta ou o comportamento da aplicação com base nos valores fornecidos.