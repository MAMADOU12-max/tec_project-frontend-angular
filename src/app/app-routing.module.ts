import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { DetailProduitComponent } from './boutique/detail-produit/detail-produit.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
   {path: '', component: HomepageComponent},
   {path: 'contact', component: ContactComponent},
   {path: 'boutique', component: BoutiqueComponent},
   {path: 'boutique/nomproduit', component: DetailProduitComponent},
   {path: 'services', component: ServicesComponent},
   {path: 'a-propos-de-nous', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
