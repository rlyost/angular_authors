import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor = {};

  constructor(private _httpService: HttpService){
  }

  ngOnInit() {
  }
  onSubmit(){
    let observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe(data => {
      console.log("Got our post back!", data);
      this.newAuthor = {name: ""};
    });
  };

}
