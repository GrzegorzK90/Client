import {Task} from './task';

export class TaskPB{
  projectId: number;
  open: Task[];
  close: Task[];
}
