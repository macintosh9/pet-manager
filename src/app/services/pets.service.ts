import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from 'src/app/stats.enum';
import { Observable } from 'rxjs';
import { Pet } from '../interfaces/pets.interface';

/**
 * Service used to interact with the pets backend.
 */
@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http: HttpClient) { }

  /**
   * Get an array of pets based on the status property.
   * @param petListStatus Value from the Status enum.
   * @returns Array with pets.
   */
  public getPetsByStatus(petListStatus: Status): Observable<Pet[]> {
    return this.http.get<Pet[]>(`https://petstore3.swagger.io/api/v3/pet/findByStatus?status=${petListStatus}`);
  }

  /**
   * Add a new pet to the application.
   * @param newPet 
   * @returns The new Pet and
   */
  public addNewPet(newPet: Pet): Observable<Pet> {
    return this.http.post<Pet>('https://petstore3.swagger.io/api/v3/pet', newPet);
  }
}
