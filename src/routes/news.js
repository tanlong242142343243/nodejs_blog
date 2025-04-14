import express from 'express';
import NewsController from '../app/NewsController.js';

const router = express.Router();
const newsController = new NewsController();

router.get('/:slug', newsController.show);
router.get('/', newsController.index);
export default router;
