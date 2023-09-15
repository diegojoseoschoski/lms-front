import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private toastService: ToastrService) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
          catchError((error: HttpErrorResponse) => {
            let errorMessage = 'An unknown error occurred';
    
            if (error.error instanceof ErrorEvent) {
              // Client-side error
              errorMessage = `${error.error.message}`;
            } else if (error.status) {
              // Server-side error
              errorMessage = `${error.error.message || 'Unknown Error'}`;
            }
            this.toastService.error(errorMessage);
            console.error(errorMessage);
            // You can display the error message to the user or perform other error handling here
    
            return throwError(errorMessage);
          })
        );
      }
}