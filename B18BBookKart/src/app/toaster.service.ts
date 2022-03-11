import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private _snackBar: MatSnackBar) { }
  addCart(message: string, action: string){
    this._snackBar.open(message, action,{
      duration:3000,
      verticalPosition:'top'
    })
  }
  removeCart(message: string, action: string){
    this._snackBar.open(message, action,{
      duration:3000,
      verticalPosition:'top'
    })
  }
  addWishlist(message: string, action: string){
    this._snackBar.open(message, action,{
      duration:3000,
      verticalPosition:'top'
    })
  }
  removeWishlist(message: string, action: string){
    this._snackBar.open(message, action,{
      duration:3000,
      verticalPosition:'top'
    })
  }
  placeOrder(message: string, action: string){
    this._snackBar.open(message, action,{
      duration:3000,
      verticalPosition:'top'
    })
  }
  removeOrder(message: string, action: string){
    this._snackBar.open(message, action,{
      duration:3000,
      verticalPosition:'top'
    })
  }
  clearCart(message: string, action: string){
    this._snackBar.open(message, action,{
      duration:3000,
      verticalPosition:'top'
    })
  }
}
