import { RoleType } from './../model/role.type';
import { AuthService } from './../service/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authService.userValue;
    
    if (user && user.roles.some((role) => this.authService.checkRoleAdmin(role.name.toString()))) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

 


}
