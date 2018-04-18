import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

import { fadeInOutAnimation, snackBarAnimation } from "../animations/animations";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [snackBarAnimation]
})
export class LoginComponent implements OnInit {
	private user = { username: '', password: '' };
	private loginError = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {	
  	let response = this.userService.getUser(this.user);
		if (response.status) this.openSnack();
		else this.router.navigate(['dashboard'], { queryParams: { username: response.username } });
  }

  openSnack() {
    this.loginError = true;

    setTimeout(() => {
           this.loginError = false;
       }, 7000);
  }
}
