import { Component, OnInit } from '@angular/core';
import { Employee } from '../interfaces/Empleado';
import { EmployeeService } from '../services/employee.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public load: boolean;
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) {
    this.load = false;
    this.getEmployees(); //Colocamos el método getEmployees() para que lo llame y nos refresque la página.
   }

   getEmployees(){
    this.employeeService.get().subscribe((data:any) => {
      this.employees = data;
    } , (error) => {
      console.log(error);
      swal({
        title: "¡Oh no! :(",
        text: "Ocurrió un error en home.component.ts",
        icon: "error",
      });
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.load = true;
    }, 350);
  }

  delete(id:any){
    swal({
      title: "¿Estás seguro de eliminar el empleado?", 
      text: "Una vez eliminado no se podrá recuperar la información.",
      icon: "warning",
      buttons: [
         "Mejor no",
         "Sí, estoy seguro"
      ],
      dangerMode: true,
    })
    .then((willDelete) => {
      if(willDelete){
        this.employeeService.delete(id).subscribe((data: any) =>{
          swal({
            title: "¡Listo!",
            text: "Empleado eliminado.",
            icon: "success",
            dangerMode: true,
          });
          this.getEmployees();
          console.log(data);
        } , (error) => {
          console.log(error);
          swal({
            title: "¡Oh no! :(",
            text: "Ocurrió un error en el método delete en home.component.ts",
            icon: "error",
          });
        });
      }
    });
  }
}