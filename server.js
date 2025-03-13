import express from "express";
import routes from "./src/routes/posts.js";

const app = express();
app.use(express.static("envios"))
routes(app)


app.listen(3000, () => {
    console.log("Servidor on");
});