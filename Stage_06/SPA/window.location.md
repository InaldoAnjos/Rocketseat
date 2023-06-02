## window.location

Em JavaScript, `window.location` é um objeto que representa a localização atual do documento no navegador. Ele fornece várias informações e funcionalidades relacionadas à URL do documento, permitindo que você acesse e manipule diferentes partes dela.

A propriedade `window.location` contém várias subpropriedades que fornecem informações específicas sobre a URL. Alguns exemplos comuns incluem:

- `window.location.href`: Retorna a URL completa do documento atual.
- `window.location.protocol`: Retorna o protocolo usado na URL, como "http:", "https:" ou "file:".
- `window.location.host`: Retorna o nome do host da URL, incluindo o nome de domínio e a porta, se especificada.
- `window.location.pathname`: Retorna o caminho e o nome do arquivo do URL.
- `window.location.search`: Retorna a string de consulta da URL, incluindo os parâmetros passados.

Você também pode atribuir um novo valor a `window.location.href` para redirecionar o navegador para uma nova URL. Por exemplo:

```javascript
window.location.href = 'https://www.exemplo.com';
```

Essa linha de código redirecionará o navegador para a URL "https://www.exemplo.com".

No entanto, é importante observar que `window.location` é um objeto do navegador e está disponível apenas em ambientes de execução do JavaScript no navegador, como páginas da web. Se você estiver usando o JavaScript em outro contexto (por exemplo, em um servidor Node.js), não terá acesso direto a `window.location`.