const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");
const { request } = require("express");

class UsersController {
    /* 
     * index  - GET para listar varios registros;
     * show   - GET para exibir um registro especifico;
     * create - POST para criar um registro;
     * update - PUT para atualizar um registro;
     * delete - DELETE para remover um registro;
    */

   async create(request, response) {
        const { name, email, password, isAdmin } = request.body;
        
        const database = await sqliteConnection();
        const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(checkUserExist){
            throw new AppError("This email is already in use");
        }

        const hashedPassword = await hash(password, 8);

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);
        
        return response.status(201).json();
   }

   async update(request, response) {
        const { name, email, password, old_password } = request.body;
        const { id } = request.params;
        

        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);


        if(!user) {
            throw new AppError("User not exist!");
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("This email is already in use");
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if(password && !old_password) {
            throw new AppError("You need to enter the old password!");
        }

        if(password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);
            
            if(!checkOldPassword) {
                throw new AppError("The old password entered is not the same as your old registered password!")
            }

            user.password = await hash(password, 8);
        }

        await database.run(`UPDATE users SET 
                            name = ?,
                            password = ?,
                            email = ?,
                            updated_at = DATETIME('now')
                            WHERE id = ?`,
                            [user.name, user.password, user.email, id]
        );

        return response.json();
   }
}

module.exports = UsersController;