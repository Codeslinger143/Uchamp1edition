import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import {MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import{ MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule} from '@angular/forms';


import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CommunityComponent } from './community/community.component';
import { UchampportfolioComponent } from './uchampportfolio/uchampportfolio.component';
import { UchampknowledgebitesComponent } from './uchampknowledgebites/uchampknowledgebites.component';
import { UchamphomecommunityComponent } from './uchamphomecommunity/uchamphomecommunity.component';
import { Uchampi2iformulaeComponent } from './uchampi2iformulae/uchampi2iformulae.component';
import { UchamphomeforallComponent } from './uchamphomeforall/uchamphomeforall.component';
import { UchamphomeoneComponent } from './uchamphomeone/uchamphomeone.component';
import { ContacticonComponent } from './contacticon/contacticon.component';
import { ContacticondialogComponent } from './contacticondialog/contacticondialog.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CommunityComponent,
    UchampportfolioComponent,
    UchampknowledgebitesComponent,
    UchamphomecommunityComponent,
    Uchampi2iformulaeComponent,
    UchamphomeforallComponent,
    UchamphomeoneComponent,
    ContacticonComponent,
    ContacticondialogComponent,
  ],
  imports:[ 
    BrowserAnimationsModule,AppRoutingModule,
    MatMenuModule,BrowserModule,MatDialogModule,MatIconModule,
    MatButtonModule,MatToolbarModule,
    MatFormFieldModule,MatInputModule,MatCheckboxModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent]
})
export class AppModule { }
