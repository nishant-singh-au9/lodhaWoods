import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }


  submitForm(whichForm: string){
      console.log(this.topForm)
  }
}
