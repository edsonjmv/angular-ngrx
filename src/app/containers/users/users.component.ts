import { GetUsers } from './../../store/actions/user.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { Router } from '@angular/router';
import { selectUserList } from '../../store/selectors/user.selectors';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersContainerComponent implements OnInit {
  users$ = this.store.pipe(select(selectUserList));

  constructor(private store: Store<IAppState>, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this.router.navigate(['user', id]);
  }
}
