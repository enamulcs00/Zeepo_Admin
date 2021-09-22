import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
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
permissions = {
  dashboard : 1,
  users : 2,
  walkthrough : 3,
  banks: 4,
  manage_update : 5,
  notification : 6,
  customer_support : 7,
  wallet_address : 8,
  request : 9,
  analytics : 10,
  rate_change : 11,
  refer_and_earn : 12,
  manage_sub_admin : 13
}
checkPermission(name : string, type) {
  let userInfo = JSON.parse(sessionStorage.getItem(environment.TokenValue));
  let permissions = userInfo.permissions;
  if(permissions.length > 0) {
    let check = permissions.find(x=> x.module.id == this.permissions[name]);
    if(check != undefined && check[(type == 'view')?'is_view':'is_add_edit']){
      return true;
    } else {
      return false;
    }
  }
  return true;
 }
}
