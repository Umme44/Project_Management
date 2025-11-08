import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { TableComponent } from '../../../shared/components/table/table.component';

@Component({
  selector: 'app-list',
  imports: [ButtonComponent, TableComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToTeam() {
    this.router.navigate(['/teams/create']);
  }
}
