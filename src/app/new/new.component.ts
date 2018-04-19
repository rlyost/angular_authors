import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor = {};
  name_error = "";

  constructor(private _httpService: HttpService){
  }

  ngOnInit() {
  }
  onSubmit(){
    if(this.newAuthor['name'].length < 3){
      this.name_error = "A name must be at least 3 characters!"
      console.log(this.name_error);
    } else {
      let observable = this._httpService.addAuthor(this.newAuthor);
      observable.subscribe(data => {
        console.log("Got our post back!", data);
        this.newAuthor = {name: ""};
      });
    };
  };
}
