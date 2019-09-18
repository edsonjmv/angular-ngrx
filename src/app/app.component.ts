import { Component, OnInit } from '@angular/core';
import { selectConfig } from './store/selectors/config.selectors';
import { IAppState } from './store/state/app.state';
import { GetConfig } from './store/actions/config.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx';
  config$ = this.store.pipe(select(selectConfig));

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetConfig());
  }
}
