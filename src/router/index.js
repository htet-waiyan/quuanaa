import { Router } from 'express';
import AmaRouter from '../ama';

const router = new Router();

router.get('/echo', (req, res) => {
  res.status(200).json({ message: 'Hello World!!!' });
});

router.use('/ama', AmaRouter);

router.use('*', (req, res) => {
  res.sendStatus(404);
});

export default router;
