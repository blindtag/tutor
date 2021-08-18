import { Module } from '@nestjs/common';
import { StudentController } from './student/student.controller';
import { StudentTutorController } from './tutor/student.controller';
import { TutorController } from './tutor/tutor.controller';


@Module({
  imports: [],
  controllers: [StudentController, TutorController, StudentTutorController]
  
})
export class AppModule {}
