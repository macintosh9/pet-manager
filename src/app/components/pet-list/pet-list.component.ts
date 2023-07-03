import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';
import { Pet } from 'src/app/interfaces/pets.interface';
import { PetsService } from 'src/app/services/pets.service';
import { Status } from 'src/app/stats.enum';

/**
 * Component that displays the list of pets based on the status.
 */
@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  /** Data for pets displayed in the list. */
  public pets: Pet[] = [];
  /** Fill the select box with the enum values. */
  public statusCodes = Status;
  /** Sets the initial selected value in the select box to available. */
  public initialValue = Status.AVAILABLE;

  constructor(private petsService: PetsService) {}

  ngOnInit(): void {
    this.getPetData(this.initialValue).subscribe(data => {
      this.pets = data;
    });
  }

  /**
   * When the user selects a new 
   * @param event MatSelectChange event.
   */
  public onStatusChange(event: MatSelectChange): void {
    this.getPetData(event.value).subscribe(data => {
      this.pets = data;
    });
  }

  private getPetData(status: Status): Observable<Pet[]> {
    return this.petsService.getPetsByStatus(status);
  }
}
