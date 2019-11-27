import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const host = '127.0.0.1';
const port = 3000;
const ApiUrl = `http://${host}:${port}`;
@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  constructor(private httpClient: HttpClient) { }

  getCategories() {
    return this.httpClient.get(`${ApiUrl}/bookcategories`).toPromise();
  }

  getCategorie(categorieID) {
    return this.httpClient.get(`${ApiUrl}/bookcategories/${categorieID}`).toPromise();
  }

  getBooksCategories(categorieID) {
    return this.httpClient.get(`${ApiUrl}/bookcategoriesbooks/${categorieID}`).toPromise();
  }

  getBooks() {
    return this.httpClient.get(`${ApiUrl}/bookdescriptions`).toPromise();
  }

  getBook(ISBN) {
    return this.httpClient.get(`${ApiUrl}/bookdescriptions/${ISBN}`).toPromise();
  }

  getBookRandom() {
    return this.httpClient.get(`${ApiUrl}/bookdescriptions/random`).toPromise();
  }

  getBookAuthor(authorId) {
    return this.httpClient.get(`${ApiUrl}/bookauthorsbooks/${authorId}`).toPromise();
  }

  getAuthors() {
    return this.httpClient.get(`${ApiUrl}/bookauthors`).toPromise();
  }

  getAuthor(authorId) {
    return this.httpClient.get(`${ApiUrl}/bookauthors/${authorId}`).toPromise();
  }
  

}
