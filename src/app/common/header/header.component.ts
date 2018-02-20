import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

formatSubtitle = (percent: number) : string => {
  console.log("I am here " + percent.toString)
  if(percent >= 100){
    return "Congratulations!"
  }else if(percent >= 50){
    return "Half"
  }else if(percent > 0){
    return "Just began"
  }else {
    return "Not started"
  }
}
}
