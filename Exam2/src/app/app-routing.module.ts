import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { MathGuard } from "./math.guard";
import { MathComponent } from "./math/math.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BouncedComponent } from "./bounced/bounced.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', component: MainComponent },
    { path: 'math/:numerator/:denominator', pathMatch: 'full', component: MathComponent, canActivate: [MathGuard] },
    { path: 'math/:numerator/:denominator', pathMatch: 'full', component: BouncedComponent, canActivate: [MathGuard] },
    { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
