import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('tutors')
export class TutorController{
    @Get()
    getTutors(){
        return 'Get all tutors'
    }

    @Get(':tutorId')
    getTutor(){
        return 'Get tutor'
    }

    @Post()
    createTutor(){
        return 'Create tutor'
    }

    @Put(':tutorId')
    updateTutor(){
        return 'Update tutor'
    }

    @Delete(':tutorId')
    deleteTutor(){
        return 'Delete tutor'
    }
}