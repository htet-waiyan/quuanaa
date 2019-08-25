import { Router } from 'express';
import AmaService from './service';

const router = new Router();

router.post('/', async ({ body }, res) => {
  const amaService = new AmaService();
  const ama = await amaService.createAma(body.email, body.phone);
  return res.status(200).json({ message: 'AMA successfully created', data: ama });
});
export default router;
