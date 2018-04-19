import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
  }
  getAuthors() {
    return this._http.get('/authors');
  }
  getAuthorById(id) {
    console.log(id);
    var route_call = "/author/" + id;
    return this._http.get(route_call);
  }
  updateRank(id, rank, authorid) {
    console.log(id, rank, authorid);
    var rankup = [id, rank, authorid]
    return this._http.put('/quote/update', rankup);
  }
  addQuote(quote) {
    console.log(quote);
    return this._http.put('/quote/new', quote);
  }
  addAuthor(name) {
    console.log(name);
    return this._http.post('/author/new', name);
  };
  updateAuthor(editAuthor) {
    console.log("updateAuthor:", editAuthor)
    return this._http.put('/author/update', editAuthor);
  };
  destroyAuthor(id) {
    console.log('destroyAuthor:', id)
    var route_call = "/author/remove/" + id;
    return this._http.delete(route_call);
  }

}
