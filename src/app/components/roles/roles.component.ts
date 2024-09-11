import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
roleList:any[] =[]
  http = inject(HttpClient)

  ngOnInit() {

  }

  getAllRoles() {
  this.http.get("http://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any) => {})
  }
}
