import { Router } from 'express';
import WhatsAppBot from '../controllers/WhatsAppBot';

const botRouter = Router();

botRouter.post('/incoming', WhatsAppBot.googleSearch);

export default botRouter;
