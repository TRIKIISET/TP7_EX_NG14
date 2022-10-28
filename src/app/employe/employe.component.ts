import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  fonctions:string[]=["Ingénieur", "Directeur", "PDG", "Secrétaire", "Technicien"];
  constructor(private fb:FormBuilder,
    private employeService:EmployeService) { }

  employeForm!:FormGroup;

  ngOnInit(): void {
    this.employeForm = this.fb.nonNullable.group({
        matricule:[0],
        nom:[''],
        fonction:['PDG'],
        departement:['Finance']
    })
  }

  onSubmit(){
    this.employeService.addNewEmploye(this.employeForm.value);
  }
  onReset(){
    this.employeForm.reset({fonction:'Secrétaire', departement:'IT'})
  }
}
