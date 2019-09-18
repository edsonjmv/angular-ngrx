import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { EUserActions, GetUser, GetUserSuccess, GetUsers } from '../actions/user.actions';
import { IAppState } from '../state/app.state';
import { UserService } from '../../services/user.service';
import { selectUserList } from '../selectors/user.selectors';

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this.action$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );

  constructor(
    private userService: UserService,
    private action$: Actions,
    private store: Store<IAppState>
  ) { }
}
