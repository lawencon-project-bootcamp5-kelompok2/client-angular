import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../service/token-storage.service'
import {LoginService} from '../../../service/login.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  nama : string;
  email : string;

  constructor(private tokenStorageService: TokenStorageService, public router: Router, private userService: LoginService) {
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.nama = user.nama;
      this.email = user.email;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/login');
  }

}
