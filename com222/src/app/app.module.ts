import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHomeComponent } from './app-home/app-home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { HomeGridComponent } from './home-grid/home-grid.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductImageModalComponent } from './product-image-modal/product-image-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GridSearchComponent } from './grid-search/grid-search.component';
import { FormsModule } from '@angular/forms';
import { GridCategoryComponent } from './grid-category/grid-category.component';
import { AutorComponent } from './autor/autor.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookAutorComponent } from './book-autor/book-autor.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    NavBarComponent,
    FooterComponent,
    HomeGridComponent,
    ProductDetailComponent,
    ProductImageModalComponent,
    GridSearchComponent,
    GridCategoryComponent,
    AutorComponent,
    AboutUsComponent,
    BookAutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [,
    MatDialog, MatDialogModule, AppHomeComponent],
  bootstrap: [AppComponent],
  entryComponents: [ProductImageModalComponent],
})
export class AppModule { }
