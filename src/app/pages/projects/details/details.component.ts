import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  paramId: any;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.paramId = 'zanl8fiumrphlcr81027nzh8';

    console.log('param', this.paramId);
  }
}
