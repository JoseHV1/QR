import express from "express"
import flash from "connect-flash";
import session from "express-session";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import routes from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(cors());

app.use(
    session({
        secret: 'key-qr',
        resave: false,
        saveUninitialized: false,
        name: 'session-qr'
    })
);
app.use(flash());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ "extended": true }));

app.use('/', routes);

app.listen(3000, () => {
    console.log("Run Server");
});

