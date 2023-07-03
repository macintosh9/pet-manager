import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';
import { Pet } from 'src/app/interfaces/pets.interface';
import { PetsService } from 'src/app/services/pets.service';
import { Status } from 'src/app/stats.enum';
import { FormComponent } from '../form/form.component';

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
  /** Current selected status. */
  private statusValue = Status.AVAILABLE;

  constructor(
    private petsService: PetsService,
    public dialog: MatDialog
  ) {}

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

  /**
   * Open the add pet dialog.
   * After the user closes the dialog, reload the current data.
   */
  public onAddPet(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      height: '800px',
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPetData(this.statusValue).subscribe(data => {
        this.pets = data;
      });
    });
  }

  private getPetData(status: Status): Observable<Pet[]> {
    this.statusValue = status;
    return this.petsService.getPetsByStatus(status);
  }

}