import { Router } from 'express';
const router = Router();
import { getAllEvents, addEvents } from '../controllers/event.controller';

router.get('/events', getAllEvents);
router.post('/add/events', addEvents);

export { router };
