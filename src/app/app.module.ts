import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MapComponent } from './share/map/map.component';
import { ReferencesComponent } from './share/references/references.component';
import { ServicesComponent } from './services/services.component';
import { SlideHomepageComponent } from './share/slide-homepage/slide-homepage.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { DetailProduitComponent } from './boutique/detail-produit/detail-produit.component';
import { ListProduitComponent } from './boutique/list-produit/list-produit.component';
import { ProduitComponent } from './boutique/produit/produit.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomepageComponent,
    MapComponent,
    ReferencesComponent,
    ServicesComponent,
    SlideHomepageComponent,
    BoutiqueComponent,
    DetailProduitComponent,
    ListProduitComponent,
    ProduitComponent,
    AboutUsComponent
    // CarouselHolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcV5DOSUL5S02FONJ2ElReoFpYY6wkqc4'
      // apiKey: `${environment.GoogleApikey}`
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
