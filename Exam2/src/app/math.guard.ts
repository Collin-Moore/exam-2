import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MathGuard implements CanActivate {

  constructor(private route: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const numerator: number = next.params['numerator'];
      const denominator: number = next.params['denominator'];
      console.log(numerator/denominator);
      
      if (Number.isInteger(numerator/denominator)) {
        return true;
      } else {
        this.route.navigate(['/bounced']);
        return false;
      }
    }
}
