import { Module } from '@nestjs/common';
import { StudentController } from './student/student.controller';
import { TutorController } from './tutor/teacher.controller';


@Module({
  imports: [],
  controllers: [StudentController, TutorController]
  
})
export class AppModule {}
