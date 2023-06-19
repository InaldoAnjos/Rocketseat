# Request Methods

    São usados em comunicações de rede para realizar ações específicas em um servidor. Existem vários métodos de requisição que podem ser usados em aplicações web, cada um com um propósito diferente.

> Get
     O método GET é usado para solicitar dados de um recurso específico. Quando você insere um URL no seu navegador e pressiona Enter, uma requisição GET é enviada para o servidor, que retorna os dados solicitados como resposta. Os parâmetros são anexados à URL na forma de uma string de consulta (query string).

> Post
     O método POST é usado para enviar dados ao servidor para que sejam processados. Normalmente, os dados são enviados no corpo da requisição em formato JSON ou formulário HTML. O POST é usado, por exemplo, quando você envia um formulário em um site para criar uma nova conta ou enviar uma mensagem.

> Put
     O método PUT é usado para atualizar um recurso existente no servidor. Ele envia os dados atualizados no corpo da requisição para substituir completamente o recurso no servidor com os novos dados fornecidos.

> Delete
     Como o nome sugere, o método DELETE é usado para solicitar a remoção de um recurso específico do servidor. Quando uma requisição DELETE é enviada para um recurso, o servidor o remove, se possível.

> Path
     O método PATCH é usado para fazer uma atualização parcial em um recurso. Em vez de enviar todos os dados do recurso como no PUT, você envia apenas os campos que deseja atualizar. O servidor então aplica as alterações nos campos especificados.
    

Além desses, existem outros métodos menos comuns, como OPTIONS, HEAD e TRACE, que têm finalidades específicas em casos de uso mais avançados.

É importante ressaltar que esses métodos são definidos pelo protocolo HTTP (Hypertext Transfer Protocol) e são amplamente utilizados na comunicação entre clientes e servidores na web.