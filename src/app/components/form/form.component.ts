import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Pet } from 'src/app/interfaces/pets.interface';
import { PetsService } from 'src/app/services/pets.service';
import { Status } from 'src/app/stats.enum';

/**
 * Component where the user can add a new pet to the application.
 */
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  petForm = this.formBuilder.group({
    name: ['', Validators.required],
    photoUrl: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private petsService: PetsService
  ) {}

  addPet(): void {
    if (this.petForm.valid) {
      const newPet: Pet = {
        id: this.generateRandomNumber(1000, 100000),
        name: this.petForm.value.name ? this.petForm.value.name : '',
        category: {
          id: 1,
          name:'Dogs'
        },
        photoUrls: [
          this.petForm.value.photoUrl ? this.petForm.value.photoUrl : ''
        ],
        status: Status.AVAILABLE,
        tags: [ {
          id: 1,
          name: 'iets'
        }]
      };
      this.petsService.addNewPet(newPet).subscribe(result => {
        console.log('result', result);
      });
    }
  }

  /**
   * Generate random number between a minimum and a maximum value.
   * @param min Lower limit.
   * @param max Upper limit.
   * @returns Random number between the lower and upper limit.
   */
  private generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}