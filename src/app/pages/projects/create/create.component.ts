import { AvailabilityStatusService } from './../../../core/services/availability_status/availability-status.service';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { from } from 'rxjs';
import { FormComponent } from '../../../shared/components/form/form.component';
import { ProjectService } from '../../../core/services/project/project.service';
import { R3SelectorScopeMode } from '@angular/compiler';
import { TeamService } from '../../../core/services/team/team.service';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, FormComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent implements OnInit {
  form!: FormGroup;
  private fb = inject(FormBuilder);
  projectForm!: FormGroup;
  status: any[] = [];
  teams: any[] = [];
  dropdownOptions: any[] = [];
  options: any[] = [];

  fields: any[] = [
    { label: 'Name', key: 'name', type: 'text', placeholder: 'Enter Name' },
    {
      label: 'Description',
      key: 'description',
      type: 'text',
      placeholder: 'Enter Description',
    },
    {
      label: 'Start Date',
      key: 'start_date',
      type: 'date',
      placeholder: 'Enter Date',
    },
    {
      label: 'End Date',
      key: 'end_date',
      type: 'date',
      placeholder: 'Enter Date',
    },
    {
      label: 'Team',
      key: 'team',
      type: 'select',
    },
    {
      label: 'Availability Status',
      key: 'current_position',
      type: 'select',
    },
  ];
  constructor(
    private projectService: ProjectService,
    private availabilityStatusService: AvailabilityStatusService,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    // this.loadAvailabilityStatus();
    // this.loadTeamsData();
    this.loadDropdownData();
  }

  loadAvailabilityStatus() {
    this.availabilityStatusService.getavailabilit_status().subscribe({
      next: (res: any) => {
        const statusArray = res.data;
        this.options = statusArray.map((item: any) => ({
          label: item.name,
          value: item.documentId,
        }));

        // this.status = options;

        this.dropdownOptions.push({
          key: 'current_position',
          options: this.options,
        });
        console.log('dropdownOptions ::', this.dropdownOptions);
      },
    });
  }

  loadTeamsData() {
    this.teamService.getTeams().subscribe({
      next: (res: any) => {
        const data = res.data;
        this.teams = data.map((item: any) => ({
          label: item.name,
          value: item.documentId,
        }));

        this.dropdownOptions.push({
          key: 'teams',
          options: this.teams,
        });
      },
    });
  }

  loadDropdownData() {
    // Prepare an empty array for all dropdowns
    // const dropdownOptions: any = [];

    this.loadAvailabilityStatus();
    this.loadTeamsData();

    // Load availability status
    // this.availabilityStatusService.getavailabilit_status().subscribe({
    //   next: (res: any) => {
    //     const statusArray = res.data;
    //     const statusOptions = statusArray.map((item: any) => ({
    //       label: item.name,
    //       value: item.documentId,
    //     }));

    //     dropdownOptions.push({
    //       key: 'availability_status',
    //       options: statusOptions,
    //     });
    //   },
    // });

    // Load teams
    // this.teamService.getTeams().subscribe({
    //   next: (res: any) => {
    //     const teamArray = res.data;
    //     const teamOptions = teamArray.map((item: any) => ({
    //       label: item.name,
    //       value: item.documentId,
    //     }));

    //     dropdownOptions.push({
    //       key: 'team',
    //       options: teamOptions,
    //     });

    //     console.log('Combined Dropdown Options:', dropdownOptions);
    //   },
    // });
  }

  onFormSubmit(formData: any) {
    console.log('Parent received form data:', formData);

    // ✅ Wrap with "data" key to match Strapi format
    const payload = { data: formData };
    console.log('PAYLOAD ::', payload);

    this.projectService.createProjects(payload.data).subscribe({
      next: (res) => console.log('✅ Project created:', res),
      error: (err) => console.error('❌ Error creating project:', err),
    });
  }
}
