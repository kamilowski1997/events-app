import express, { Response } from 'express';
import { check, validationResult } from 'express-validator';
import Event from '../../db/Event/Event';
import { EventDto } from '../../utils/interfaces/event';
import { TypedRequestBody } from '../../utils/interfaces/request';

const router = express.Router();

router.post(
  '/',
  [
    check('email').isEmail().withMessage('Invalid email address.'),
    check('firstName').trim().isLength({ min: 1 }).withMessage('First name is required.'),
    check('lastName').trim().isLength({ min: 1 }).withMessage('Last name is required.'),
    check('eventDate').isISO8601().toDate().withMessage('Invalid date.'),
  ],
  async (req: TypedRequestBody<EventDto>, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json(errors);
    }
    try {
      const event = await Event.create(req.body);

      res.status(201).json(event);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  },
);

export default router;
