import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { userReducers } from './user.reducers';
import { configReducers } from './config.reducers';
import { IAppState } from '../state/app.state';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  config: configReducers,
};
