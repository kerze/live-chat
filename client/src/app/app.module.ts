import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EntriesComponent } from './components/entries/entries.component';
import { EntryItemComponent } from './components/entries/entry-item/entry-item.component';
import { TextSendComponent } from './components/entries/text-send/text-send.component';
import { ModalComponent } from './components/entries/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    EntriesComponent,
    EntryItemComponent,
    TextSendComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
