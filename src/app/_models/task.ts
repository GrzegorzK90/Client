import {User} from './user';

export class Task {
  taskId: number;
  title: string;
  content: string;
  finished: boolean;
  status: string;
  user: User;
}
