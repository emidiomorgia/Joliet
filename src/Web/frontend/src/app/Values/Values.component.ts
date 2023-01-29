import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Value } from './value';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Values',
  templateUrl: './Values.component.html',
  styleUrls: ['./Values.component.css']
})
export class ValuesComponent implements OnInit {

  public value : number=0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  loadResults() {
    const apiUrl=environment.apiUrl;
    this.http.get<Value>(`${apiUrl}/values/100`).subscribe(
      (data)=>{
        this.value=data.value;
      },
      ()=>{
        this.value=0;
    });
  }

}
