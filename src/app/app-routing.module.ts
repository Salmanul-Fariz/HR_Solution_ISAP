import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ProductsComponent } from './pages/products/products.component';
import { HumanResourceDetailsComponent } from './pages/products/human-resource-details/human-resource-details.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about_us', component: AboutUsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'partners', component: PartnersComponent },
      {
        path: 'products',
        children: [
          {
            path: '',
            component: ProductsComponent,
          },
          {
            path: 'human_resource_details',
            component: HumanResourceDetailsComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
