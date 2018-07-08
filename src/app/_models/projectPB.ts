import {Project} from './project';
import {TaskPB} from './taskPB';

export class ProjectPB {
  projectId: number;
  project: Project;
  taskPB: TaskPB;
  bugs: string;
}
