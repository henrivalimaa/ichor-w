import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
	private users = USER_DATA;

  constructor() { }

  getUser(credentials: any): any {
  	for (let user of this.users) {
  		if (user.username === credentials.username && user.password === credentials.password) {
  			return user;
  		}
  	}

  	return { status: 404 };
  }
}

const USER_DATA: Array<any> = [
  {position: 'Developer', name: 'Henri Välimaa', username: 'valimaa.henri@gmail.com', password: 'pwd1'},
  {position: 'Developer', name: 'Henri Välimaa', username: 'valimaa.henri@gmail.com', password: 'pwd1'},
  {position: 'Developer', name: 'Henri Välimaa', username: 'valimaa.henri@gmail.com', password: 'pwd1'},
  {position: 'Developer', name: 'Henri Välimaa', username: 'valimaa.henri@gmail.com', password: 'pwd1'}
];
