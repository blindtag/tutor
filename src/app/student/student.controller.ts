import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common"
import {CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto} from './dto/student.dto'

@Controller('students')
export class StudentController{
    @Get()
    getStudents(): FindStudentResponseDto[]{
        return 'All students'
    }

    @Get(':studentId')
    getStudent(@Param('studentId') studentId:string): FindStudentResponseDto{
        return studentId
    }

    @Post()
    createStudent(@Body() body: CreateStudentDto ):StudentResponseDto {
        return 'Create student'
    }

    @Put(':studentId')
    updateStudent(@Param('studentId') studentId:string,
    @Body() body: UpdateStudentDto
    ):StudentResponseDto{
        return 'Update student'
    }

    @Delete(':studentId')
    deleteStudent(@Param('studentId') studentId:string){
        return 'Delete student'
    }
}