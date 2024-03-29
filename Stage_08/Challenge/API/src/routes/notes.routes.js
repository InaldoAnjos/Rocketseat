const { Router } = require("express");
const notesRoutes = Router();

const NotesController = require("../controllers/NotesController");

const notesController = new NotesController();

notesRoutes.post("/:user_id", notesController.create);
notesRoutes.delete("/:id", notesController.delete);
notesRoutes.get("/:id", notesController.show);
notesRoutes.get("/", notesController.index);

module.exports = notesRoutes;