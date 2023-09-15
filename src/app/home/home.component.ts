import { AuthService } from './../core/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../core/model/user';
import { UserService } from '../signup/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  user: User;
   

  constructor(private userService: UserService,
             private authService: AuthService,
             private router: Router,
  ) { 
    this.user = this.authService.userValue;
  }

  ngOnInit() {
     
     
  }
}
