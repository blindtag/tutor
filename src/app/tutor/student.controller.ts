import { Controller, Delete, Get, Post, Put, Param } from "@nestjs/common";

@Controller('tutors/:tutorId/students')
export class StudentTutorController{
    @Get()
    getTutorStudents(@Param('studentId') studentId:string){
        return 'Get tutor students'
    }

    @Put('/:studentId')
    updateTutorStudents(@Param('tutorId') tutorId:string,
    @Param('studentId') studentId:string){
        return 'Update tutor students'
    }
}