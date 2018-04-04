import { CanActivate,RouterStateSnapshot  } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { AuthService } from 'shared/services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate (route, state: RouterStateSnapshot) {
    return this.auth.user$.map(user => {
      if (user) return true
    
       this.router.navigate(['/login'], {queryParams: { returnUrl: state.url}});
      });
  }

}
