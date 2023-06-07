import { GithubUser } from "./GithubUser.js";

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }
    
    load() {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || [];
    }
    
    save() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }
    
    async add(username) {
        try {
            const userExist = this.entries.find(entry => entry.login === username);
            
            if(userExist) {
                throw new Error('User already exists!');
            }
            
            const user = await GithubUser.search(username);
            
            if(user.login === undefined) {
                throw new Error('User not found!')
            }
            
            this.entries = [user, ...this.entries]
            this.update()
            this.save()
        } catch(error) {
            alert(error.message)
        }
    }
    
    delete(user) {
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login);
        
        this.entries = filteredEntries;
        this.update();
        this.save();
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)
        
        this.tbody = this.root.querySelector('table tbody');
        
        this.update();
        this.onadd();
    }

    isEmpty() {
        const countRows = this.entries = JSON.parse(localStorage.getItem('@github-favorites:'));
        console.log(countRows.length)

        if(countRows.length === 0) {
            console.log(`entrei aqui`)
            document.querySelector('.empty-list').classList.remove('hide');
            document.querySelector('tbody').classList.add('hide');
        }else {
            console.log(`entrei no else aqui`)
            document.querySelector('tbody').classList.remove('hide');
            document.querySelector('.empty-list').classList.add('hide');
        }
    }
    
    onadd() {
        const addButton = this.root.querySelector('.button-search button');
        addButton.onclick = () => {
            const { value } = this.root.querySelector('.search input');
            
            this.add(value);
        }
    }
    
    update() {
        this.removeAllTr();
        
        this.entries.forEach(user => {
            const row = this.createRow();
            
            row.querySelector('.user img').src             = `https://github.com/${user.login}.png`;
            row.querySelector('.user img').alt             = `Imagem de ${user.name}`;
            row.querySelector('.user a').href              = `https://github.com/${user.login}`;
            row.querySelector('.user p').textContent       = user.name;
            row.querySelector('.user span').textContent    = user.login;
            row.querySelector('.repositories').textContent = user.public_repos;
            row.querySelector('.followers').textContent    = user.followers;
            
            row.querySelector('.action').onclick = () => {
                const isOK = confirm(`Are you sure you want to delete this row?`);
                
                if(isOK) {
                    this.delete(user)
                }
            }
            this.tbody.append(row)
        })
    }
    
    createRow() {
        const tr = document.createElement('tr');
        
        tr.innerHTML = 
        `
        <td class="user">
            <img src="https://github.com/inaldoanjos.png" alt="Photo de perfil">
            <a href="https://github.com/inaldoanjos" target="_blank">
                <p>Inaldo Anjos</p>
                <span>/inaldoanjos</span>
            </a>
        </td>
        <td class="repositories">99</td>
        <td class="followers">9999</td>
        <td class="action">Remover</td>
        `
        return tr;
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr')
            .forEach((tr) => {
                tr.remove()
            })
    }
}