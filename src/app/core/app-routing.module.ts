import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotFoundComponent } from "../componets/not-found";

const appRoutes: Routes = [
  { path: "", redirectTo: "/pokemons", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]

})
export class AppRoutingModule { }
