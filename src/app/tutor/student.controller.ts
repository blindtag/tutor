import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('tutors/:tutorId/students')
export class StudentTutorController{
    @Get()
    getTutorStudents(){
        return 'Get tutor students'
    }

    @Put('/:studentId')
    updateTutorStudents(){
        return 'Update tutor students'
    }
}