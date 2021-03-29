import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentBetaalComponent } from './student-betaal/student-betaal.component';
import { StudentBetaaldComponent } from './student-betaald/student-betaald.component';
import { StudentVerschuldigdComponent } from './student-verschuldigd/student-verschuldigd.component';
import { NgxCurrencyModule, CurrencyMaskInputMode } from "ngx-currency";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';


export const customCurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "€",
  suffix: "",
  thousands: ".",
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

@NgModule({
  declarations: [
    AppComponent,
    StudentBetaalComponent,
    StudentBetaaldComponent,
    StudentVerschuldigdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
