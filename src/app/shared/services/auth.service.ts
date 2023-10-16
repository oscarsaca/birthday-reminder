import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) {}

  private handleAuthError(error: any): Observable<never> {
    console.error(`Error from Firebase: ${ error.message }`);

    switch (error.code) {
      case 'auth/email-already-in-use':
        console.error('The email address is already in use by another account.');
        break;
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        console.error('Invalid email or password.');
        break;
      default:
        console.error('There was an error. Please try again later.');
        break;
    }

    return throwError(() => new Error(error.message));
  }

  signup(email: string, password: string): Observable<any> {
    return from(this.fireAuth.createUserWithEmailAndPassword(email, password)).pipe(
      catchError(this.handleAuthError.bind(this))
    );
  }

  login(email: string, password: string): Observable<any> {
    return from(this.fireAuth.signInWithEmailAndPassword(email, password)).pipe(
      catchError(this.handleAuthError.bind(this))
    );
  }

  logout(): Observable<void> {
    return from(this.fireAuth.signOut()).pipe(
      catchError(error => {
        console.error(`Error from Firebase: ${ error.message }`);
        return throwError(() => new Error('There was a problem with logout. Please try again later.'));
      })
    );
  }

  recoverPassword(email: string): Observable<void> {
    return from(this.fireAuth.sendPasswordResetEmail(email));
  }
}
