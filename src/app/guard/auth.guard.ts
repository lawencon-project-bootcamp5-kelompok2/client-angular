import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service'
import { TokenStorageService } from '../service/token-storage.service'


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: LoginService,private tokenStorage: TokenStorageService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const role = this.tokenStorage.getUser().roles;

    if (this.userService.isLogin() && role.includes(expectedRole)) {
      return true
    } else {
      this.router.navigate(['/login']);
      return false
    }

    
  }

}