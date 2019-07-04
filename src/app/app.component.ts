import { Component, InjectionToken } from '@angular/core';
import { Inject } from '@angular/core';
import { H, k} from './h';
import { N } from './n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    // can not use `a = k` or `a = new H('0000')` in param constructor (but other func can use)
    // (Because all param in constructor are injected or provided in module)
    // use Inject => don't need to add into provider in app.module
    // Inject realy neccesary when H has param constuctor `new H('0000')`
    @Inject(k) s: H,
    // need to add into provider in app.module other way don't need to add into provider in app.module `@Inject(N) n: N,`
    public n: N
  ) {
    console.log('s= ', s);
    // change s ==> angywhere inject k will be change too (see HeroesComponent)
    s.a += 'sss';
    console.log('n= ', n);
  }
  title = 'Tour of Heroes';
}
