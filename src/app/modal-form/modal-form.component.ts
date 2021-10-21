import { Component, OnInit } from '@angular/core';
import { AppService } from "../services/app.services"
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  topForm = {
    name : "",
    email: "",
    phone: ""
  }

  constructor(public appService: AppService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }


  submitForm(whichForm: string){
    this.appService.sendTopMail(this.topForm).subscribe((data: any) => {
      if(data.err){
        this.openSnackBar('Isuue while saving response, please try again later.')
      }else{
        this.openSnackBar('Response recorded, you will be contacted soon.')
      }
    })
  }

  openSnackBar = (message: string) => {
    this.snackBar.open(message,'',{
      duration: 3000
    })
  }
}
