import {Controller, Delete, Get, Param, Post, Put} from "@nestjs/common"

@Controller('students')
export class StudentController{
    @Get()
    getStudents(){
        return 'All students'
    }
    
    @Get(':studentId')
    getStudent(){
        return 'Get student by id'
    }

    @Post()
    createStudent(){
        return 'Create student'
    }

    @Put(':studentId')
    updateStudent(){
        return 'Update student'
    }

    @Delete(':studentId')
    deleteStudent(){
        return 'Delete student'
    }
}