import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  presentsToast(type: any, position: any, message: any) {
    const Toast = Swal.mixin({
      toast: true,
      position: position,
      timerProgressBar: true,
      showCancelButton: false,
      showCloseButton: true,
      showConfirmButton: false,
      timer: 3000
    });
    Toast.fire({
      title: message,
      icon: type
    });
  }

  confirmToast() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  openDialog(type,message) {
    Swal.fire({
      title: 'Error!',
      text: message,
      icon: type,
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Close'
    })
   }

    MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

checkType(file_type) {
  let split = file_type.split("/");
  return split[0]
}

noSpace(event) {
  if (event.which === 32 && !event.target.value.length)
    event.preventDefault();
}

}
