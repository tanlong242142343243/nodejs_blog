class NewsController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        // Example implementation
        res.send('News details');
    }
}
export default NewsController;
