import { Component, OnInit } from '@angular/core';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  crises$: Observable<Crisis[]>;

  selectedId: number;

  constructor(private service: CrisisService) { }

  ngOnInit() {
    this.crises$ = this.service.getCrises();
  }

}
