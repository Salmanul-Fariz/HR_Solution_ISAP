import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgbCarouselModule,
  NgbModule,
  NgbNavModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ProductsComponent } from './pages/products/products.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HumanResourceDetailsComponent } from './pages/products/human-resource-details/human-resource-details.component';
import { TimesheetAttendanceDetailsComponent } from './pages/products/timesheet-attendance-details/timesheet-attendance-details.component';
import { JobPortalAutoRecruitmentDetailsComponent } from './pages/products/job-portal-auto-recruitment-details/job-portal-auto-recruitment-details.component';
import { RecruitmentManagementDetailsComponent } from './pages/products/recruitment-management-details/recruitment-management-details.component';
import { BannerSectionComponent } from './pages/home/banner-section/banner-section.component';
import { Section2Component } from './pages/home/section-2/section-2.component';
import { Section3Component } from './pages/home/section-3/section-3.component';
import { Section4Component } from './pages/home/section-4/section-4.component';
import { Section5Component } from './pages/home/section-5/section-5.component';
import { Section6Component } from './pages/home/section-6/section-6.component';
import { Section7Component } from './pages/home/section-7/section-7.component';
import { Section8Component } from './pages/home/section-8/section-8.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    PartnersComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    HumanResourceDetailsComponent,
    TimesheetAttendanceDetailsComponent,
    JobPortalAutoRecruitmentDetailsComponent,
    RecruitmentManagementDetailsComponent,
    BannerSectionComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    Section8Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgbNavModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
