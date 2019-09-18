import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EConfigActions, GetConfigSuccess, GetConfig } from '../actions/config.actions';
import { IConfig } from '../../models/config.interface';
import { ConfigService } from '../../services/config.service';

@Injectable()
export class ConfigEffects {
  @Effect()
  getConfig$ = this.action$.pipe(
    ofType<GetConfig>(EConfigActions.GetConfig),
    switchMap(() => this.configService.getConfig()),
    switchMap((config: IConfig) => {
      return of(new GetConfigSuccess(config));
    })
  );

  constructor(
    private configService: ConfigService,
    private action$: Actions
  ) { }
}
