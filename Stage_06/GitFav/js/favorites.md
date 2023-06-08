    import { GithubUser } from "./GithubUser.js";
    
    export class Favorites {
        constructor(root) {
            this.root = document.querySelector(root);
            this.load();
        }
    
        load() {
            this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || [];
        }
    
        save() {
            localStorage.setItem('@github-favorites:', JSON.stringify(this.entries));
        }
    
        async add(username) {
            try {
                const userExist = this.entries.find(entry => entry.login === username);
    
                if (userExist) {
                    throw new Error('User already exists!');
                }
    
                const user = await GithubUser.search(username);
    
                if (user.login === undefined) {
                    throw new Error('User not found!');
                }
    
                this.entries = [user, ...this.entries];
                this.update();
                this.save();
            } catch (error) {
                alert(error.message);
            }
        }
    
        delete(user) {
            const filteredEntries = this.entries.filter(entry => entry.login !== user.login);
    
            this.entries = filteredEntries;
            this.update();
            this.save();
        }
    }

Nesse trecho de código, temos a classe `Favorites`, que é responsável por gerenciar uma lista de usuários favoritos do GitHub. Aqui estão as explicações para as principais partes do código:

1.  `import { GithubUser } from "./GithubUser.js";`: Essa linha importa a classe `GithubUser` de um arquivo chamado `GithubUser.js`. Ela é necessária para poder usar o método `GithubUser.search(username)` mais adiante no código.
    
2.  `constructor(root)`: O construtor da classe `Favorites` recebe um parâmetro chamado `root`, que é um seletor CSS usado para selecionar o elemento raiz no DOM onde os favoritos serão exibidos. Esse elemento é armazenado na propriedade `root` da instância.
    
3.  `load()`: O método `load` é responsável por carregar a lista de favoritos do armazenamento local (LocalStorage). Ele recupera os dados armazenados na chave `@github-favorites:` e os analisa como JSON usando `JSON.parse()`. Se não houver dados salvos, é atribuído um array vazio à propriedade `entries` da instância.
    
4.  `save()`: O método `save` é responsável por salvar a lista de favoritos no armazenamento local. Ele converte a propriedade `entries` em uma string JSON usando `JSON.stringify()` e a armazena na chave `@github-favorites:` usando `localStorage.setItem()`.
    
5.  `async add(username)`: O método `add` é usado para adicionar um usuário favorito à lista. Ele recebe o nome de usuário `username` como parâmetro. Dentro do método, primeiro verifica se o usuário já existe na lista de favoritos, comparando o nome de usuário com os registros existentes. Se o usuário já existir, uma exceção é lançada com a mensagem "User already exists!".
    
6.  Dentro do bloco `try`, o método chama o método estático `search(username)` da classe `GithubUser`. Esse método realiza uma busca assíncrona na API do GitHub para obter as informações do usuário correspondente ao nome de usuário fornecido. O resultado é armazenado na constante `user`.
    
7.  Se o `login` do usuário retornado for `undefined`, isso significa que o usuário não foi encontrado. Nesse caso, uma exceção é lançada com a mensagem "User not found!".
    
8.  Se tudo ocorrer corretamente, o usuário é adicionado à lista `entries` na primeira posição usando o operador spread (`...`). Em seguida, o método `update()` é chamado para atualizar a exibição dos favoritos, e o método `save()` é chamado para salvar a lista atualizada no armazenamento local.
    
9.  `delete(user)`: O método `delete` é responsável por remover um usuário da lista de favoritos. Ele recebe um objeto `user` como parâmetro e filtra os elementos da lista `entries`, removendo o usuário cujo `login` seja igual ao `login` do objeto passado. O resultado filtrado é atribuído novamente à propriedade `entries`, e os métodos `update()` e `save()` são chamados para refletir a remoção nos favoritos exibidos e no armazenamento local, respectivamente.

 Nesse trecho de código, temos a classe `FavoritesView` que estende a classe `Favorites`. Ela adiciona funcionalidades específicas para a exibição dos favoritos no DOM. Aqui estão algumas explicações sobre as partes relevantes:

1.  `constructor(root)`: O construtor da classe `FavoritesView` chama o construtor da classe pai (`Favorites`) usando `super(root)`, passando o mesmo parâmetro `root`. Isso garante que a classe `Favorites` seja corretamente inicializada antes de adicionar as funcionalidades específicas da classe `FavoritesView`.
    
2.  `this.tbody = this.root.querySelector('table tbody');`: Aqui, é selecionado o elemento `tbody` dentro de uma tabela no DOM, usando `this.root` como o elemento raiz especificado no construtor. A referência ao elemento `tbody` é armazenada na propriedade `this.tbody` para uso posterior.
    
3.  `this.update();`: O método `update` é chamado no construtor da classe `FavoritesView`. Esse método é responsável por atualizar a exibição dos favoritos no DOM, populando a tabela com os dados dos usuários favoritos.
    
4.  `this.onadd()`: O método `onadd` é chamado no construtor da classe `FavoritesView`. Ele atribui um evento de clique a um botão de adição de favoritos no DOM. Quando o botão é clicado, o método `add(value)` é chamado com o valor do campo de entrada como argumento.
    
5.  `update()`: O método `update` é responsável por atualizar a exibição dos favoritos no DOM. Ele começa chamando o método `removeAllTr()` para remover todas as linhas (`tr`) existentes na tabela.
    
6.  Em seguida, ele percorre a lista `entries` de favoritos e, para cada usuário, cria uma nova linha na tabela usando o método `createRow()`. Os dados do usuário são preenchidos nas células (`td`) correspondentes da linha.
    
7.  O método `createRow()` é responsável por criar uma nova linha (`tr`) na tabela com as células e o conteúdo apropriados para cada coluna. Ele retorna essa linha criada.
    
8.  Finalmente, o método `update` atribui um evento de clique ao elemento de ação da linha, para que, quando o usuário clicar nele, seja exibida uma mensagem de confirmação e, se confirmado, o usuário seja removido da lista de favoritos usando o método `delete(user)`. A linha é adicionada à tabela usando `this.tbody.append(row)`.

> Written with [StackEdit](https://stackedit.io/).
