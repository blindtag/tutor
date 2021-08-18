import { Controller, Delete, Get, Post, Put, Param } from "@nestjs/common";
import { FindStudentResponseDto, StudentResponseDto } from "../student/dto/student.dto";

@Controller('tutors/:tutorId/students')
export class StudentTutorController{
    @Get()
    getTutorStudents(@Param('studentId') studentId:string):FindStudentResponseDto[]{
        return 'Get tutor students'
    }

    @Put('/:studentId')
    updateTutorStudents(@Param('tutorId') tutorId:string,
    @Param('studentId') studentId:string):StudentResponseDto{
        return 'Update tutor students'
    }
}