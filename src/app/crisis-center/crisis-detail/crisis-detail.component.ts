import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';
import { switchMap, tap } from 'rxjs/operators';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private crisisService: CrisisService) { }

  crisis: Crisis;
  editName: string;

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap( params => {
        return this.crisisService.getCrisis(params.get('id'));
      })
    )
    .subscribe(c => {
      this.editName = c.name;
      this.crisis = c;
    });
  }

}
