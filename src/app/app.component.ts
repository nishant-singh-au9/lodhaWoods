import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalFormComponent } from "./modal-form/modal-form.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lodha-Woods';

  topForm = {
    name : "",
    email: "",
    phone: ""
  }


  bottomForm = {
    name : "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  }


  constructor(public dialog: MatDialog) {}

  openDialog(): void {

    const dialogRef = this.dialog.open(ModalFormComponent, {
      panelClass: 'from-modal',
    });
  }

  ngOnInit() {
    this.openDialog()
  }

  submitForm(whichForm: string){
    if(whichForm === 'top'){
      console.log(this.topForm)
    }else{
      console.log(this.bottomForm)
    }
  }

}
