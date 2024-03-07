import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  nameFilter: string = '';
  emailFilter: string = '';

  constructor(private http: HttpClient,private userService: UserService) { }

  ngOnInit(): void {
    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    //   .subscribe(users => {
    //     this.users = users;
    //   });
      this.userService.getUsers().subscribe(users => {
        this.users = users;
      });
  }

  get filteredUsers() {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.nameFilter.toLowerCase()) &&
      user.email.toLowerCase().includes(this.emailFilter.toLowerCase())
    );
  }
}


