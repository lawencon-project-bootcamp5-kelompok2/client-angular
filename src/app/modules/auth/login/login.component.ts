import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from '../../../service/login.service';
import {TokenStorageService} from '../../../service/token-storage.service';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private title: Title, private authService: LoginService, private tokenStorage: TokenStorageService, public router: Router) {
  }

  ngOnInit() {
    this.title.setTitle("Login - E-Learning")
    $('body').addClass('hold-transition login-page');
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      if (this.roles.includes('ROLE_STUDENT')) {
        this.router.navigate(['/student']);
      } else if (this.roles.includes('ROLE_TRAINER')) {
        this.router.navigate(['/trainer']);
      } else if (this.roles.includes('ROLE_ADMIN')) {
        this.router.navigate(['/admin']);
      }
    }
  }

  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        
        if (this.roles.includes('ROLE_TRAINER')) {
          this.router.navigateByUrl('/trainer');
        } else if (this.roles.includes('ROLE_STUDENT')) {
          this.router.navigateByUrl('/student');
        } else if (this.roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/admin']);
      }
    },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}
