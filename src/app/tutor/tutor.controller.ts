import { Controller, Delete, Get, Post, Put, Param, Body } from "@nestjs/common";
import { CreateTutorDto, FindTutorResponseDto, TutorResponseDto, UpdateTutorDto } from "./dto/tutor.dto";

@Controller('tutors')
export class TutorController{
    @Get()
    getTutors():FindTutorResponseDto[]{
        return 'Get all tutors'
    }

    @Get('/:tutorId')
    getTutor(@Param('tutorId') tutorId:string):FindTutorResponseDto{
        return 'Get tutor'
    }

    @Post()
    createTutor(@Body() body :CreateTutorDto):TutorResponseDto{
        return 'Create tutor'
    }

    @Put('/:tutorId')
    updateTutor(
        @Param('tutorId') tutorId:string, 
        @Body() body:UpdateTutorDto){
        return 'Update tutor'
    }

    @Delete(':tutorId')
    deleteTutor(){
        return 'Delete tutor'
    }
}