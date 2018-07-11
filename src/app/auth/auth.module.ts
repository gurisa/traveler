import { NgModule } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  var config = {
    tokenName: 'token',
		tokenGetter: (() => localStorage.getItem('token')),
    globalHeaders: [
      {'Content-Type':'application/json'},
      {'Accept':'application/json'},
      // {'Access-Control-Allow-Credentials': 'true'},
      // {'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT'},
      {'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, X-XSRF-TOKEN'},
    ],
    noJwtError: true,
	};
  return new AuthHttp(new AuthConfig(config), http, options);
}

@NgModule({
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})

export class AuthModule {

}