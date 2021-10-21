import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalFormComponent } from "./modal-form/modal-form.component"
import { AppService } from "./services/app.services"
import {MatSnackBar} from '@angular/material/snack-bar';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lodha-Woods';
  isNavBar = false

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


  constructor(public dialog: MatDialog, public appService: AppService, public snackBar: MatSnackBar) {}

  openDialog(): void {

    const dialogRef = this.dialog.open(ModalFormComponent, {
      panelClass: 'from-modal',
    });
  }

  ngOnInit() {
    this.openDialog()
  }

  toggleNavbar(){
    this.isNavBar = !this.isNavBar
  }

  submitForm(whichForm: string){
    if(whichForm === 'top'){
      this.appService.sendTopMail(this.topForm).subscribe((data: any) => {
        console.log(data)
        if(data.err){
          this.openSnackBar('Isuue while saving response, please try again later.')
        }else{
          this.openSnackBar('Response recorded, you will be contacted soon.')
        }
      })
    }else{
      this.appService.sendBottomMail(this.bottomForm).subscribe((data: any) => {
        if(data.err){
          this.openSnackBar('Isuue while saving response, please try again later.')
        }else{
          this.openSnackBar('Response recorded, you will be contacted soon.')
        }
      })
    }
  }

  openSnackBar = (message: string) => {
    this.snackBar.open(message,'',{
      duration: 3000
    })
  }

}
