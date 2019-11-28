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
    return this.httpClient.get(`${ApiUrl}/bookdescriptions/random/books`).toPromise();
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
  
  verifyUser(email) {
    return this.httpClient.get(`${ApiUrl}/customers/${email}`).toPromise();
  }

  updateUser(user, CustID) {
    return this.httpClient.patch(`${ApiUrl}/customers/${CustID}`, user ).toPromise();
  }
  createUser(user) {
    return this.httpClient.post(`${ApiUrl}/customers`, user ).toPromise();
  }

  createOrder(CustID) {
    let json = {
      'custID': CustID,
      'orderdate': 20191127
    }
    return this.httpClient.post(`${ApiUrl}/bookorders`, json ).toPromise();
  }
  getOrder(custID) {
    return this.httpClient.get(`${ApiUrl}/bookorders/${custID}`).toPromise();
  }

  createOrderItem(json) {
    return this.httpClient.post(`${ApiUrl}/bookorderitems`, json).toPromise();
  }
 

}
