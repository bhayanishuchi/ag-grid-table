import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        // const token = localStorage.getItem('token');
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVU1IxMjM0NiIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNTc1MzUyNDI0fQ.yBUrMY7iFw5USp0R-q_LU8GfS8FNeEBUkSwC53osIW4';
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token,
                }
            });
        } else {
            this.router.navigate(['/login']);
        }
        return next.handle(request);
    }
}
