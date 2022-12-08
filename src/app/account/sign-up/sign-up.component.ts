import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  title = 'reactive-form';
  countryList = [
    {id: 1, name: 'Viet Nam'},
    {id: 2, name: 'Canada'},
    {id: 3, name: 'USA'},
  ];
  contactForm = new FormGroup({
    email: new FormControl('', [Validators.email,Validators.required]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required,Validators.minLength(6)]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('',[Validators.required,Validators.min(18)]),
    gender: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required,Validators.pattern("(84|0[3|5|7|8|9])+([0-9]{8})\\b")]),
  },{validators:this.validateAreEqual});
  get email(){
    return this.contactForm.get('email');
  }
  get password(){
    return this.contactForm.get('password');
  }
  get confirmPassword(){
    return this.contactForm.get('confirmPassword');
  }
  get country(){
    return this.contactForm.get('country');
  }
  get age(){
    return this.contactForm.get('age');
  }
  get gender(){
    return this.contactForm.get('gender');
  }
  get phone(){
    return this.contactForm.get('phone');
  }



  onSubmit() {
    console.log(this.contactForm.value);
  }

  ngOnInit(): void {
  }
  public validateAreEqual(c: AbstractControl): {notSame: boolean} | null {
    return  c.value.password  ===  c.value.confirmPassword ? null : {notSame: true};
  }

}
