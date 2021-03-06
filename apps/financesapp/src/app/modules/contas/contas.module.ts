import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContasComponent } from './contas.component';
import { ContasRoutingModule } from '@finances-app/src/app/modules/contas/contas-routing.module';
import { FitCardModule } from '@finances-app/fit-card';
import { AngularMaterialModule } from '@finances-app/angular-material';
import { HeaderMesModule } from '@finances-app/header-mes';
import { OperacoesSharedModule } from '@finances-app/operacoes-shared';
import { ContaSharedModule } from '@finances-app/conta-shared';

@NgModule({
  declarations: [ContasComponent],
  imports: [
    CommonModule,
    ContasRoutingModule,
    FitCardModule,
    AngularMaterialModule,
    HeaderMesModule,
    OperacoesSharedModule,
    ContaSharedModule
  ],
})
export class ContasModule {}
