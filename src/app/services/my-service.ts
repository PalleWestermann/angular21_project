import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  private apiUrl = "https://api.freeprojectapi.com/api/BusBooking/GetAllUsers";
  private http = inject(HttpClient);

  getUsers(): Observable<ApiResponse<User[]>> {
    return this.http.get<ApiResponse<User[]>>(this.apiUrl);
  }
}
