import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;
  submitted = false;
  isHaveError = false;
  isHaveSucess = false;
  isSubmittProcess = false;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.patchvalue();
  }

  patchvalue() {
    this.FormData = this.builder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  formSubmit() {
    // this.isHaveError = false;
    // this.isHaveSucess = false;
    // if (this.isSubmittProcess) {
    //   return;
    // }
    // if (this.FormData.invalid) {
    //   this.submitted = true;
    //   this.FormData.markAllAsTouched();
    //   return;
    // }
    // this.isSubmittProcess = true;
    // const { name, subject, email, message } = this.FormData.controls;
    // const templateParams = {
    //   name: name.value,
    //   subject: subject.value,
    //   email: email.value,
    //   message: message.value,
    // };
    // emailjs
    //   .send(
    //     'service_xwyv35j',
    //     'template_b4errqh',
    //     templateParams,
    //     '0-h4ZxqO_dppeMWJl'
    //   )
    //   .then(
    //     () => {
    //       this.isHaveError = false;
    //       this.isHaveSucess = true;
    //       this.isSubmittProcess = false;
    //       this.patchvalue();
    //       setTimeout(() => {
    //         this.isHaveSucess = false;
    //         this.changeRef.detectChanges();
    //       }, 2500);
    //     },
    //     () => {
    //       this.isHaveError = true;
    //       this.isHaveSucess = false;
    //       this.isSubmittProcess = false;
    //     }
    //   );
  }
}
