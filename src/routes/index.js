import newsRouter from './news.js';

function route(app) {
    app.use('/news', newsRouter);
    app.get('/', (req, res) => {
        res.render('home');

    });

    app.get('/search', (req, res) => {
        res.render('search');

    });
    app.post('/search', (req, res) => {
        eg
        console.log(req.body);
        res.render('search');
    });

}
export default route;