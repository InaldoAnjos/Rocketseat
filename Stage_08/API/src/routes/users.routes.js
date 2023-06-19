const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

function myMiddleware(request, response, next) {
    console.log(`You went through the middleware!`);
    
    // if(!request.body.isAdmin) {
    //     return response.json({ message: `User unauthorized!`});
    // };

    next();
}


const usersController = new UsersController();

// Method GET

// //Router Params
// app.get("/message/:id/:user", (request, response) => { 

//     const {id, user} = request.params;

//     response.send(`
//         ID message: ${id}.
//         For user:   ${user}
//     `);
// });

// //Query Params
// app.get("/users", (request, response) => {
    
//     const {page, limit} = request.query;

//     response.send(`
//         Page: ${page}.
//         Show: ${limit}.
//     `);
// });

// Method POST

// usersRoutes.post("/", myMiddleware, usersController.create);
// usersRoutes.put("/:id", myMiddleware, usersController.update);

usersRoutes.post("/", myMiddleware, usersController.create);
usersRoutes.put("/:id", myMiddleware, usersController.update);

 module.exports = usersRoutes;