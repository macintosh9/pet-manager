import { Component, Input } from '@angular/core';
import { Pet } from 'src/app/interfaces/pets.interface';

/**
 * Display the content of a pet in a material card.
 */
@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent {

  @Input()
  petData!: Pet;

}
