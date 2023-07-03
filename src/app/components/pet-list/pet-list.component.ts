import { Component, OnInit } from '@angular/core';
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

  public pets: Pet[] = [];

  constructor(private petsService: PetsService) {}

  ngOnInit(): void {
    this.petsService.getPetsByStatus(Status.AVAILABLE).subscribe(data => {
      console.log('data', data);
      this.pets = data;
    });
  }
}
