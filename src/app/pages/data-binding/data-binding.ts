import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  deptName = "HR";
  className = "danger";
  inputType = "radio";


  showMessage() {
    alert('Hello');
  }

}
