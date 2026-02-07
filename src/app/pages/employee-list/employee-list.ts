import { Component, effect, inject, input } from '@angular/core';
import { Observable } from 'rxjs';
import { MyService } from '../../services/my-service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
users: User[] = [];

  constructor(private userService: MyService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (response) => {
        if (response.result) {
          this.users = response.data;
        }
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }
}
