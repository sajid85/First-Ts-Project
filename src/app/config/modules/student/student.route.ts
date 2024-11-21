import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

//will call controller function to create student

router.post('/create-student', StudentControllers.createStudent);

router.get('/', StudentControllers.getAllStudents);

router.get('/:studentId', StudentControllers.getSingleStudent);

export const studentRoutes = router;
