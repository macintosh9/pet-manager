import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from 'src/app/stats.enum';
import { Observable } from 'rxjs';
import { Pet } from '../interfaces/pets.interface';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http: HttpClient) { }

  getPetsByStatus(petListStatus: Status): Observable<Pet[]> {
    return this.http.get<Pet[]>(`https://petstore3.swagger.io/api/v3/pet/findByStatus?status=${petListStatus}`);
  }
}
