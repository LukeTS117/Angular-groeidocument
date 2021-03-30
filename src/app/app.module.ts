import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentBetaalComponent } from './student-betaal/student-betaal.component';
import { StudentBetaaldComponent } from './student-betaald/student-betaald.component';
import { NgxCurrencyModule } from "ngx-currency";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    StudentBetaalComponent,
    StudentBetaaldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCurrencyModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
