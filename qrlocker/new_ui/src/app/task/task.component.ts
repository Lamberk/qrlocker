import {
  Component,
  OnInit
} from '@angular/core';

import {TaskService} from './task.service';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'task'.
   */
  selector: 'task',  // <task></task>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  /**
   * Set our default values
   */
  /**
   * TypeScript public modifiers
   */
  constructor(
    public taskService: TaskService,
  ) {}

  public ngOnInit() {
    this.getTasks();
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }
  private getTasks() {
    this.taskService.getTasks()
      .subscribe((tasks) => {
        console.log(tasks.json());
      });
  }
}
