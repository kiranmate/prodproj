import { AddService, Ad } from './add.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'forms';
  ads:Array<Ad>=new Array()
  curAd:Ad={} as Ad
  

constructor(private ad:AddService){
this.ads.push({nm:'android',img:'http://www.codekul.com/img/CODEKUL-min.png'})
this.ads.push({nm:'codekul',img:'http://www.codekul.com/img/CODEKUL-min.png'})
this.ads.push({nm:'melayer',img:'http://www.codekul.com/img/CODEKUL-min.png'})
}

ngOnInit(){
    let cnt=1
    this.ad.obsAds().subscribe(
    it=>{
    this.curAd=this.ads[cnt++]
     console.log(this.curAd)
    if(cnt>=this.ads.length){
    cnt=0
  }

}

)
}
ngOnDestroy(){
  
}
}
