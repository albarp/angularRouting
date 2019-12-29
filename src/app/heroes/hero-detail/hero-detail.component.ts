import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Router, ActivatedRoute, ParamMap, UrlSegment } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  public hero$: Observable<Hero>;

  @Input() hero: Hero;

  constructor(private route: ActivatedRoute,
    private service: HeroService,
    private router: Router) { }

  ngOnInit() {

    // // esempio recupero url
    // this.route.url
    // .pipe(
    //   tap(x => console.log(x)) // senza il subscribe il tap non funziona
    // )
    // .subscribe( x => {
    //   console.log(x);
    // });

    // const x = this.router.routerState;
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(+(params.get('id'))))
    );
  }

}
