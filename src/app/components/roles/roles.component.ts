import { Component } from '@angular/core';

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
export class RolesComponent implements OnInit{

  http = inject(HttpClient)

  }

  getAllRoles() {
  this.http.get("http://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any) => {})
  }
  ngOnInit() {

  }

  getAllRoles() {
  this.http.get("http://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe(res:any => {})
  }
}
