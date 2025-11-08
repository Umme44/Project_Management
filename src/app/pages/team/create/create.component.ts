import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../shared/components/form/form.component';
import { TeamService } from '../../../core/services/team/team.service';
import { ProjectService } from '../../../core/services/project/project.service';

@Component({
  selector: 'app-create',
  imports: [FormComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent implements OnInit {
  fields: any = [
    {
      label: 'Team Name',
      type: 'text',
      placeholder: 'Enter Name',
    },
    {
      label: 'Email',
      type: 'text',
      placeholder: 'Enter Email',
    },
    {
      label: 'Project ',
      type: 'select',
      placeholder: 'Enter Name',
    },
    {
      label: 'Assign User',
      type: 'select',
    },
  ];

  constructor(
    private router: Router,
    private teamService: TeamService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {}

  onFormSubmit(event: Event) {}
}
