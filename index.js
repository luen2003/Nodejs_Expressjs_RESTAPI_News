import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static(__dirname));
mongoose.connect(('mongodb+srv://userapi:userapi123@clusteruser.kydclaj.mongodb.net/?retryWrites=true&w=majority'), () => {
    console.log("Connected to MongoDB");
});

app.use("/users", usersRoutes);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
    console.log(__dirname);
});
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));



    