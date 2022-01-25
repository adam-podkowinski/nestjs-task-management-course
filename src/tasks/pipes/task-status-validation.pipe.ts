import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  transform(value: any): any {
    if (!Object.values(TaskStatus).includes(value)) {
      throw new BadRequestException(`Invalid task status provided: ${value}`);
    }
    return value;
  }
}
