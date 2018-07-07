import {User} from './user';

export class Task {
  taskId: number;
  title: string;
  content: string;
  finished: boolean;
  status: string;
  userId: number;
  //project: number;
  bugs: string;
  source: string;
  time: string;
}
