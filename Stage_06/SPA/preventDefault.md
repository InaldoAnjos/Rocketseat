## PreventDefault()

O método `preventDefault()` é uma função usada em JavaScript para evitar o comportamento padrão de um evento em um elemento HTML.
Quando um evento ocorre em um elemento HTML, como um clique em um link (`<a>`) ou o envio de um formulário (`<form>`), o navegador geralmente executa uma ação padrão relacionada a esse evento. Por exemplo, ao clicar em um link, o navegador geralmente segue o link para a URL especificada.
No entanto, às vezes queremos anular esse comportamento padrão e substituí-lo por algo personalizado. É aí que o `preventDefault()` é útil. Ao chamar essa função dentro do manipulador de eventos de um elemento, você impede que a ação padrão ocorra.
Por exemplo, se você tiver um formulário e desejar validar os dados antes de enviá-los para o servidor, pode usar o `preventDefault()` para cancelar o envio do formulário se a validação falhar. Isso evita que a página seja atualizada e os dados sejam enviados, permitindo que você exiba mensagens de erro ou tome outras ações personalizadas.

Aqui está um exemplo de como usar o `preventDefault()` em um manipulador de evento de clique de um link:

  ```

    javascript

    const link = document.querySelector('a');    
    
    link.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Aqui você pode adicionar o seu código personalizado
    
    });
    
 ```

Dessa forma, quando o link for clicado, a função `preventDefault()` será chamada, impedindo que o navegador siga o link normalmente. Em seguida, você pode adicionar seu código personalizado para manipular o evento do clique como desejar.
Espero que isso esclareça o uso do `preventDefault()` em JavaScript. Se tiver mais alguma dúvida, estou aqui para ajudar!

> Written with [StackEdit](https://stackedit.io/).