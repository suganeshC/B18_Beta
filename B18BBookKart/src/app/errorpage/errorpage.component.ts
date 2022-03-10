import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.scss']
})
export class ErrorpageComponent implements OnInit {
  public urlName: string = "";

  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.urlName = this._router.url
        
  }
  goToHome(){
    this._router.navigateByUrl('home');
  }
}
