import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Role } from '../../models/role';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-modal-role',
  templateUrl: './modal-role.component.html',
  styleUrls: ['./modal-role.component.css']
})
export class ModalRoleComponent implements OnInit {

  @Output() close = new EventEmitter<boolean>();
  @Output() validate = new EventEmitter<Role>();

  public name: string;


  constructor() { }

  ngOnInit() {
    this.name = '';
  }

  public onValidate() {
    if (this.name !== '') {
      this.validate.emit({name: this.name, img: "Fill_icon" , categories: [{name: 'test1', champions: []},{name: 'test3', champions: []},{name: 'tes41', champions: []}]});
    }
  }
  public onCancel() {
    this.close.emit(true);
  }

}
