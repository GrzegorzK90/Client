export class TasksOfUsers {
  userId: number;
  open: { taskName: string; taskId: number; }[];
  planed: { taskName: string; taskId: number; }[];
  done: { taskName: string; taskId: number; }[];
}
