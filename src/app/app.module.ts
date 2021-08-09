import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewdataComponent } from './pages/viewdata/viewdata.component';
import { AdddataComponent } from './pages/adddata/adddata.component';
import { UpdateComponent } from './pages/update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ViewdataComponent,
    AdddataComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,FilterPipeModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    closeButton: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
