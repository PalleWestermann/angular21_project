import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './attribute-directive.html',
  styleUrl: './attribute-directive.css',
})
export class AttributeDirective {
  myclass = "bg-success";
  isActive: boolean = true;
  marks=61;

  backColor = "";

  myCss = {
    color: 'white',
    "background-color": 'green'
  }

  ToggleActivation() {
    this.isActive = !this.isActive;
  }
}
