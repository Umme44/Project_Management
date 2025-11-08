import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { TableComponent } from '../../../shared/components/table/table.component';
import { ProjectService } from '../../../core/services/project/project.service';

@Component({
  selector: 'app-list',
  imports: [ButtonComponent, TableComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  paramId: any;
  projects: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.paramId = 'zanl8fiumrphlcr81027nzh8';

    console.log('param', this.paramId);
    this.loadProjects();
  }

  loadProjects() {
    this.projects = [];

    this.projectService.getProjects().subscribe({
      next: (res: any) => {
        this.projects.push({
          rows: res.data[0],
          columns: res.data.length,
        });
        console.log('COLUMNSww ::', this.projects);
        console.log('rowsss ::', this.projects);
      },
    });
  }
  createFrom() {
    this.router.navigate(['/projects/create']);
  }
}
