import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import { Status } from 'src/app/stats.enum';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  constructor(private petsService: PetsService) {}

  ngOnInit(): void {
    this.petsService.getPetsByStatus(Status.AVAILABLE).subscribe(data => {
      console.log('data', data);
    });
  }
}
