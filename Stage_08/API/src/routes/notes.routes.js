const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

function myMiddleware(request, response, next) {
    console.log(`You went through the middleware!`);
    
    // if(!request.body.isAdmin) {
    //     return response.json({ message: `User unauthorized!`});
    // };

    next();
}


const notesController = new NotesController();

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

notesRoutes.get("/", myMiddleware, notesController.index);
notesRoutes.post("/:user_id", myMiddleware, notesController.create);
notesRoutes.get("/:id", myMiddleware, notesController.show);
notesRoutes.delete("/:id", myMiddleware, notesController.delete);

 module.exports = notesRoutes;