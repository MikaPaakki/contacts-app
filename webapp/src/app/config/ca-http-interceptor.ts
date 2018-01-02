import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export class CaHttpInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercept http request');

    const token = this.getStoredToken();

    if (token) {
      const request = req.clone( {
        setHeaders: {Authorization: token.token_type + ' ' + token.access_token}
      });

      return next.handle(request);
    } else {
      return next.handle(req);
    }


  }

   private getStoredToken() {
    const token = localStorage.getItem('ca-token');
    return JSON.parse(token);
  }
}
