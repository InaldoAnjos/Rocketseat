# Router Params x Query Params

As diferenças entre "router params" e "query params" estão relacionadas à forma como os parâmetros são enviados e acessados em uma requisição HTTP.

1. Router params (ou path params):
Os "router params" são parâmetros incluídos na própria rota da URL. Eles são usados para capturar valores dinâmicos em uma parte específica da URL. Geralmente, são usados em requisições que seguem um padrão de roteamento predefinido.

Por exemplo, considere a seguinte rota: `/users/:id`. Nessa rota, `:id` é um "router param" que pode conter um valor dinâmico, como `/users/123`. O valor `123` pode ser acessado no lado do servidor por meio do "router param" `id` e usado para identificar um usuário específico.

Em uma aplicação Node.js com Express, você pode definir esse tipo de rota usando `app.get('/users/:id', ...)`. E, no manipulador da rota, você pode acessar o "router param" usando `req.params.id`.

2. Query params:
Os "query params" são parâmetros incluídos na string de consulta (query string) da URL. Eles são usados para transmitir informações adicionais para a requisição. Os "query params" têm a forma de pares chave-valor e são separados por "&" após o ponto de interrogação "?" na URL.

Por exemplo, na URL `/search?keyword=banana&page=1`, os "query params" são `keyword=banana` e `page=1`. Esses parâmetros podem ser usados para fornecer critérios de pesquisa ou controlar a paginação de resultados.

Em Node.js com Express, você pode acessar os "query params" usando o objeto `req.query`. Por exemplo, `req.query.keyword` retornaria o valor "banana" e `req.query.page` retornaria o valor "1".

Resumindo, a diferença entre "router params" e "query params" é a forma como os parâmetros são enviados e acessados em uma requisição:

- "Router params" são capturados diretamente na rota da URL e são usados para partes da URL que seguem um padrão predefinido. Eles são definidos na própria rota e podem ser acessados no lado do servidor usando `req.params`.
- "Query params" são enviados como parte da string de consulta (query string) da URL. Eles são usados para transmitir informações adicionais e têm a forma de pares chave-valor. Os "query params" podem ser acessados no lado do servidor usando `req.query`.

Ambos os tipos de parâmetros são úteis em diferentes situações, e a escolha entre eles depende do contexto e dos requisitos do seu aplicativo.