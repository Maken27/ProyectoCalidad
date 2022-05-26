import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../interfaces/Empleado';
import { EmployeeService } from '../services/employee.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  employee: Employee = {
    name: "",
    address:"",
    phone: "", 
    email: ""
  };
  id: any;
  editing: boolean = false;
  employees: Employee[] = [];
  constructor(private employeesService : EmployeeService, private activatedRoute : ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id']; //Acá se referencia desde app.module.ts en el Arreglo de rutas
    //Verificamos que id traiga algo
    if(this.id){
      this.editing = true;
      //Hacemos un llamado a employeesService
      this.employeesService.get().subscribe((data: any) => {
        this.employees = data; 
        this.employee = this.employees.find((m) => { return m.id == this.id}); 
        console.log(this.employees.find((m) => { return m.id == this.id}));
      } , (error) => {
        console.log(error);
        swal ('Ocurrió un error en form.component.ts');
      })
    }else{
      this.editing = false;
    }
   }

  ngOnInit(): void {
  }

  saveEmployee(){
    if(this.editing){
      this.employeesService.put(this.employee).subscribe((data) => {
        swal({
          title: "¡Listo!",
          text: "Se actualizo el empleado.",
          icon: "success",
        });
        console.log(data);
      } , (error) => {
        console.log(error);
        alert('Ocurrió un error 1 en el método saveEmployee() en form.component.ts');
      });
    }else{
      this.employeesService.save(this.employee).subscribe((data) => {
        console.log(data);
        swal({
          title: "¡Listo!",
          text: "Empleado guardado.",
          icon: "success",
        });
      } , (error) => {
        console.log(error);
        swal({
          title: "¡Oh, no! :(",
          text: "Ocurrió un error 2 en el método saveEmployee() en form.component.ts",
          icon: "error",
        });
      });
    }
  }
}
