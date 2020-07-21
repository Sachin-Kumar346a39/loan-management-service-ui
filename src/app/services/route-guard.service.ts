import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ValidateUserService } from './validate-user.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private validateUserService: ValidateUserService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.validateUserService.isUserLoggedIn()) { return true; }

    else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
