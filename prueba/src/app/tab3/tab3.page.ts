import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  dateForm: FormGroup;
  daysDifference: number | null = null;

  constructor(private fb: FormBuilder) {
    this.dateForm = this.fb.group({
      fechaInicio: [''],
      fechaFinal: ['']
    });
  }

  calculateDaysBetween(): number {
    const fechaInicio = new Date(this.dateForm.value.fechaInicio);
    const fechaFinal = new Date(this.dateForm.value.fechaFinal);
    const timeDiff = fechaFinal.getTime() - fechaInicio.getTime();
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    return daysDiff;
  }

  onSubmit(): void {
    this.daysDifference = this.calculateDaysBetween();
  }
}

