import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormComponent } from '../../../shared/components/form/form.component';
import { TaskService } from '../../../core/services/task/task.service';
import { ProjectService } from '../../../core/services/project/project.service';
import { AvailabilityStatusService } from '../../../core/services/availability_status/availability-status.service';

@Component({
  selector: 'app-create',
  imports: [FormComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent implements OnInit {
  status: [] = [];
  projects: [] = [];
  projectOptions: any = [];

  fields: any[] = [
    { label: 'Name', key: 'name', type: 'text', placeholder: 'Enter Task' },
    {
      label: 'Availability Status',
      key: 'current_position',
      type: 'select',
    },
    {
      label: 'Projects',
      type: 'select',
      key: 'project',
    },
  ];

  constructor(
    private router: Router,
    private taskService: TaskService,
    private projectService: ProjectService,
    private availabilityStatusService: AvailabilityStatusService
  ) {}
  ngOnInit(): void {
    this.loadProjects();
    this.loadAvailabilityStatus();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe({
      next: (response: any) => {
        this.projects = response.data;
        this.projectOptions = this.projects.map((data: any) => ({
          value: data.documentId,
          label: data.name,
        }));
      },
    });
  }
  loadAvailabilityStatus() {
    this.availabilityStatusService.getavailabilit_status().subscribe({
      next: (res: any) => {
        const statusArray = res.data;
        const options = statusArray.map((item: any) => ({
          label: item.name,
          value: item.documentId,
        }));

        this.status = options;
      },
    });
  }
  onFormSubmit(fromData: any) {
    console.log('FRO DATAT', fromData);
    const payLoad = {
      data: {
        name: fromData.name, // task name
        current_position: fromData.current_position, // match Strapi field name
        project: fromData.project,
      },
    };
    console.log('from adta', payLoad);

    this.taskService.createTask(fromData).subscribe({
      next: (res) => console.log('Task created successfully:', res),
      error: (err) => console.error('Error creating task:', err),
    });
  }
}
