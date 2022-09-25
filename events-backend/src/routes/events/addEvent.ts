import express, { Response } from 'express';
import { check, validationResult } from 'express-validator';
import { EventDto } from '../../utils/interfaces/event';
import { TypedRequestBody } from '../../utils/interfaces/request';

const router = express.Router();

router.post(
  '/',
  [
    check('email').isEmail().withMessage('Invalid email address.'),
    check('firstName').isLength({ min: 1 }).withMessage('First name is required.'),
    check('lastName').isLength({ min: 1 }).withMessage('Last name is required.'),
    check('eventDate').isISO8601().toDate().withMessage('Invalid date.'),
  ],
  async (req: TypedRequestBody<EventDto>, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json(errors);
    }
    try {
      console.log(req.body.eventDate);

      res.status(201).send();
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  },
);

export default router;
