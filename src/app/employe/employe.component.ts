import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
        departement:['Finance'],
        diplomes:this.fb.array([])
    })

  }

  onSubmit(){
    this.employeService.addNewEmploye(this.employeForm.value);
  }
  onReset(){
    this.employeForm.reset({fonction:'Secrétaire', departement:'IT'})
    this.lesDiplomes.clear();
  }

  get lesDiplomes(){
    return this.employeForm.get('diplomes') as FormArray;
  }
  ajouterDiplome(){
    this.lesDiplomes.push(this.fb.control(''));
  }
}
