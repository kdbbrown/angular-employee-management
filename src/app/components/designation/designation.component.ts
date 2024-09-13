import {Component, inject, OnInit} from '@angular/core';
import {MasterService} from "../../services/master.service";
import {APIResponseModel, IDesignation} from "../../model/interface/role";

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  designations: IDesignation[] = [
    { designationId: 1, designation: "Software Engineer" },
    { designationId: 2, designation: "Product Manager" },
    { designationId: 3, designation: "Data Scientist" },
    { designationId: 4, designation: "UX Designer" },
    { designationId: 5, designation: "Quality Assurance" },
    { designationId: 6, designation: "System Administrator" },
    { designationId: 7, designation: "Business Analyst" },
    { designationId: 8, designation: "Marketing Specialist" },
    { designationId: 9, designation: "Sales Executive" },
    { designationId: 10, designation: "HR Manager" },
  ];
  designationList: IDesignation[] = new Array<IDesignation>();
  isLoader: boolean = false;
  masterService = inject(MasterService)

  ngOnInit() {
    // this.getAllDesignation()
  }

  getAllDesignation() {
    this.masterService.getDesignation().subscribe({
      next: (res: APIResponseModel) => {
        this.designationList = res.data
      },
      error: (err: Error) => {console.error(err)},
      complete: () => {console.info('Completed')}
    })
  }
}
