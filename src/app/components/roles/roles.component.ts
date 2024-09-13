import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IRole} from "../../model/interface/role";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [
    { roleId: 1, role: "Admin" },
    { roleId: 2, role: "User" },
    { roleId: 3, role: "Moderator" },
    { roleId: 4, role: "Editor" },
    { roleId: 5, role: "Viewer" },
    { roleId: 6, role: "Contributor" },
    { roleId: 7, role: "Manager" },
    { roleId: 8, role: "Developer" },
    { roleId: 9, role: "Designer" },
    { roleId: 10, role: "Analyst" },
  ]
  http = inject(HttpClient)

  ngOnInit() {
  }

  getAllRoles() {
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: any) => {
        this.roleList = res.data;
      }
    )
  }
}
