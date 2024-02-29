/**
 * Title: nav.component.ts
 * Author: Danielle Taplin
 * Date: 2/28/2024
 */

// import statements
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export interface AppUser {
  // defines variable to be used in the display in the navbar
  fullName: string
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  // define variables
  appUser: AppUser
  isSignedIn: boolean

  constructor(private cookieService: CookieService) {
    this.appUser = {} as AppUser
    this.isSignedIn = this.cookieService.get('session_user') ? true : false

    if (this.isSignedIn) {
      this.appUser = {
        fullName: this.cookieService.get('session_name')
      }
    }
  }
  // signout function that deletes the cookie and reloads the page
  signout() {
    this.cookieService.deleteAll();
    window.location.href = '/'
  }
}