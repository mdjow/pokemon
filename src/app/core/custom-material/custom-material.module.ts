import { NgModule, Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CdkTableModule } from "@angular/cdk/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatPaginatorModule, MatPaginatorIntl} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl {
    itemsPerPageLabel = "Itens por página: ";
    nextPageLabel = "avançar";
    previousPageLabel = "voltar";
    lastPageLabel = "ultima página";
    firstPageLabel = "primeira página";

    getRangeLabel = (page: number, pageSize: number, length: number) => {
      return ((page * pageSize) + 1)
        + " - " +
        ((page * pageSize) + pageSize)
        + " de " + length;
    }
}

const material = [
  CommonModule,
  CdkTableModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatTableModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatButtonModule,
  MatCardModule,
];

@NgModule({
  imports: material,
  exports: material,
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginatorIntl,
    },
  ],
})
export class CustomMaterialModule {}
