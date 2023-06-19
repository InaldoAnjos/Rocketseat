require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations"); 

const AppError = require("./utils/AppError");

const express = require("express"); //Importing express to the project

const routes = require("./routes");

migrationsRun();

const app = express(); //Initializing the express

app.use(express.json()); //Check explanation in express.json().md file

app.use(routes); // Check explanation in class "Organizando a estrutura do projeto" on Stage 08 - Module 2


app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error!",
    });
});

const PORT = 3333; //Setting the PORT number

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`)); //Checking is everything is OK with the communication

