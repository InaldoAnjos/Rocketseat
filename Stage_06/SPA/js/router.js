export class Router {
    routes = {};

    add(routeName, page) {
        this.routes[routeName] = page;
    }

    route(event){
        event = event || window.event; //Verifica se foi passado um evento, caso contrário, pega o evento que está na janela
        event.preventDefault(); //Função utilizada para evitar o comportamento padrão de um evento em um elemento HTML
        
        window.history.pushState({}, "", event.target.href);
        
        this.handle();
    }   
    
    handle() {
        // Método 1:
        // const pathname = window.location.pathname;
        // Método 2: Desestruturação de objeto
        const { pathname } = window.location;
        // Ao clicar em um link ele vai verificar se essa rota existe no objeto criado (routes), caso exista ele atribui o caminho a variável route, caso contrário, ele atribui o caminho 404.
        const route = this.routes[pathname] || this.routes[404];
        
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html;
        });
        
        // Mesma coisa que:
        // fetch(route).then(function(data) {
        //   data.text().then(function(html) {
        //     console.log(html);
        //   });
        // });
        
        // console.log(route);
    }
}