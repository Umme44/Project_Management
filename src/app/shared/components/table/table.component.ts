import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  @Input() projects = [];

  columns: string[] = [];

  ngOnInit(): void {
    console.log('projects ', this.projects);

    if (this.projects.length > 0) {
      this.columns = Object.keys(this.projects[0]);
    }
  }

  getValue(project: any, col: string): any {
    const value = project[col];
    if (value === null || value === undefined) return '-';
    if (typeof value === 'object') {
      // If it's a nested object, display 'name' property or first key
      return value.name || JSON.stringify(value);
    }
    return value;
  }
}
