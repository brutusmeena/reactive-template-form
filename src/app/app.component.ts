import { Component, VERSION, ViewChild } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  myReactiveForm: FormGroup;

  genders = [{ id: "1", gender: "Male" }, { id: "2", gender: "Female" }];

  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      userDetail: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      course: new FormControl("Angular"),
      gender: new FormControl("Male")
    });
  }

  @ViewChild("myForm") myForm: NgForm;
  userName = "";

  onSubmit() {
    console.log(this.myReactiveForm);
  }
}
