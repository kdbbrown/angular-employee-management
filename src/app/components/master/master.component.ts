import { Component } from '@angular/core';
import {DesignationComponent} from "../designation/designation.component";
import {RolesComponent} from "../roles/roles.component";
import {NgClass} from "@angular/common";

type Tab = "Roles" | "Designation"

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [DesignationComponent, RolesComponent, NgClass],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  currentComponent:Tab = "Roles"

  changeTab(tabName:Tab){
      this.currentComponent = tabName
  }
}
