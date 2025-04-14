class SiteController {
    // Handles the root route '/'
    index(req, res) {
        res.render('home'); // Ensure 'home' view exists
    }

    // Handles the '/search' route
    search(req, res) {
        res.render('search'); // Ensure 'search' view exists
    }
}

export default SiteController;
