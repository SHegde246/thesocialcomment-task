import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //the date is dynamic. it will always display the current date
  today=Date.now();
  constructor(){
    setInterval(() => {
      this.today = Date.now();
    }, 1000)
  }

  ngOnInit(): void {
    
  }

}
