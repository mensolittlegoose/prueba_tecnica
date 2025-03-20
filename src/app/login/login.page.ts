import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonCard, IonItem, IonInput, IonButton, 
  IonToolbar, IonAlert, IonInputPasswordToggle, IonFooter } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonCard, IonItem, IonInput, IonButton, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonAlert, IonInputPasswordToggle, IonFooter]
})
export class LoginPage implements OnInit {

  credentials!: FormGroup;

  usermail: string = "admin@admin.com"
  userpassword: string = "admin"

  isAlertOpen = false;
  alertButtons = ['Action'];
  alertMessage = '';
  alertHeader = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  async login() {
    var email = await this.email?.value;;
    var password = await this.password?.value;
    if (email == "") {
      this.alertHeader = "Email"
      this.alertMessage = "te amo"
      this.setOpen(true);
    }
    else if (password == "") {
      this.alertHeader = "Password"
      this.alertMessage = "rdido un perro"
      this.setOpen(true);
    }
    
    else if ((email != this.usermail) && (password != this.userpassword) ){
      this.alertHeader = "Tonto"
      this.alertMessage = "Incorrect credentials :p"
      this.setOpen(true);
    }
    else{
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("showGreeting", "true");
      this.router.navigate(['/home'])      
    }

  }

  // Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}

