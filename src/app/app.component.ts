import { User } from './core/model/user';
import { RoleType } from './core/model/role.type';
import { AuthService } from './core/service/auth.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user?: User | null;

  errorMessage: string | null = null;

  constructor(private authService: AuthService,
              private http: HttpClient) {
    this.authService.user.subscribe((user) => {
      this.user = user;
    });
  }

  get isAdmin() {
    return (
      this.user &&
      this.user.roles.some((role) => this.authService.checkRoleAdmin(role.name.toString()))
    );
  }


  logout() {
    this.authService.logout();
  }
}
