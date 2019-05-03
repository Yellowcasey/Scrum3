import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, first, tap } from 'rxjs/operators';
import { auth } from 'firebase';
//import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

      return this.auth.currentUserObservable.pipe(first(), map(user => !!user), tap(loggedIn => {
        if(!loggedIn) {
          console.log("Access Denied");
          this.router.navigate(['login']);
        }
      }));
  }
}
