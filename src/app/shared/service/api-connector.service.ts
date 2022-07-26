import { ApplicationInitStatus, Injectable } from '@angular/core';
import { ApiConnector } from '@deejayy/api-caller';
import { ReactiveConfigService } from '@deejayy/reactive-config';
import { Observable, of } from 'rxjs';
import { ConfigVars } from 'src/app/shared/model/config-vars.model';

@Injectable()
export class ApiConnectorService extends ApiConnector {
  public override tokenData$: Observable<string> = of('app not initialized yet');
  public override defaultApiUrl: string = 'http://localhost/';
  public override errorHandler = (payload: string | unknown) => {
    console.error('handling... ', payload);
  };

  constructor(private config: ReactiveConfigService<ConfigVars>, private initStatus: ApplicationInitStatus) {
    super();
    this.initStatus.donePromise.then(() => {
      this.defaultApiUrl = this.config.get('apiUrl');
      this.tokenData$ = of('token!');
    });
  }
}
