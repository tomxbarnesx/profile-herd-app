import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProfileService } from '../core/profile.service';

@Component({
  selector: 'app-profile-add',
  templateUrl: './profile-add.component.html',
  styleUrls: ['./profile-add.component.scss']
})
export class ProfileAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private ps: ProfileService) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: [ '', Validators.required ],
      age: [ '', Validators.required ],
    })
  }

  addProfile(name, age) {
    this.ps.addProfile(name, age);
  }

  ngOnInit() {
  }

}
