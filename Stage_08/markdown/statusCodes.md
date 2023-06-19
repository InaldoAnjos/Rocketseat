# HTTP Codes

> Os códigos de status HTTP (HTTP status codes) são números de três dígitos que são retornados pelo servidor em resposta a uma requisição HTTP. Eles fornecem informações sobre o resultado da requisição e indicam se ela foi bem-sucedida, se ocorreu algum erro ou se é necessário realizar alguma ação adicional.

Os códigos de status HTTP são divididos em cinco categorias principais, cada uma identificada pelo primeiro dígito:

1. **Códigos de Informação (1xx)**: Indicam que a requisição foi recebida e o servidor está aguardando a continuação da solicitação do cliente. Por exemplo, o código de status 100 (Continue) é usado para indicar que o servidor está pronto para receber o restante da requisição.

2. **Códigos de Sucesso (2xx)**: Indicam que a requisição foi recebida e processada com sucesso pelo servidor. O código de status 200 (OK) é o mais comum nessa categoria e indica que a requisição foi bem-sucedida e a resposta está sendo enviada.

3. **Códigos de Redirecionamento (3xx)**: Indicam que a requisição precisa ser redirecionada para outro local para ser completada. Por exemplo, o código de status 302 (Found) é usado para redirecionar o cliente para uma nova URL.

4. **Códigos de Erro do Cliente (4xx)**: Indicam que ocorreu um erro na requisição feita pelo cliente. Esses códigos são frequentemente usados quando a requisição não pode ser processada devido a erros no lado do cliente, como requisição inválida ou falta de autorização. Exemplos comuns são o código de status 400 (Bad Request) e 403 (Forbidden).

5. **Códigos de Erro do Servidor (5xx)**: Indicam que ocorreu um erro no servidor durante o processamento da requisição. Esses códigos são usados quando o servidor encontra algum problema interno, como falha no banco de dados ou erro no processamento. O código de status 500 (Internal Server Error) é o mais comum nessa categoria.

Existem muitos outros códigos de status HTTP, cada um com seu próprio significado e finalidade específicos. Além dos códigos mencionados acima, alguns exemplos adicionais incluem o código de status 404 (Not Found) para indicar que o recurso solicitado não foi encontrado, o código de status 201 (Created) para indicar que um novo recurso foi criado com sucesso e o código de status 401 (Unauthorized) para indicar que a requisição requer autenticação ou autorização.

Os códigos de status HTTP são importantes para a comunicação entre clientes e servidores, pois fornecem informações sobre o resultado de uma requisição. Eles são úteis tanto para desenvolvedores como para usuários finais, ajudando a identificar e diagnosticar problemas em comunicações HTTP.