import express, { urlencoded, json } from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import { engine } from 'express-handlebars';

// Get the equivalent of __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;
import route from './routes/index.js';

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(express.static(join(__dirname, 'public')));

app.use(morgan('combined'));

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', join(__dirname, 'resources', 'views'));

// TODO
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
