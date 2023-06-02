export class Router {
    routes = {}; // Criar um objeto vazio

    add(routeName, page) {
        this.routes[routeName] = page; //Voltar na aula para entender esse trecho
    }

    route(event){
        event = event || window.event; //Verifica se foi passado um evento, caso contrário, pega o evento que está na janela
        event.preventDefault(); //Função utilizada para evitar o comportamento padrão de um evento em elemento HTML

        window.history.pushState({}, "", event.target.href); //Permite que o usuário navegue para a URL especificada (`event.target.href`) sem recarregar a página inteira.

        this.handle();
    }

    handle() {
        const { pathname } = window.location; // É um objeto que representa a localização atual do documento no navegador. Nesse caso, nós estamos desestruturando a subpropriedade que está dentro do window.location, que é o window.location.pathname, e inserindo dentro do objeto de mesmo nome, pathname.

        const route = this.routes[pathname] || this.routes[404]; // Ao clicar em um link ele vai verificar se essa rota existe no objeto criado (routes), caso exista ele atribui o caminho a variável route, caso contrário, ele atribui o caminho 404.

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html;
        });
    }
}