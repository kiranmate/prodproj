import { Data, OneDto, ManyDto } from './domain/domain';
import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  data: Data
  users: Array<Data>



  constructor(
    private rest: RestService
  ) { }

  getOne() {
    this.rest.getOne(1).subscribe(
      res => {

        let dto = res as ManyDto  //let dto = res as OneDto  (for getting one image on get button)

        this.users = dto.data   //this.data=dto.data   (for getting one image on get button)

        this.rest.CreateUser(this.data).subscribe(
          res => console.log(res)
        )
      }

    )
  }

  ManyUsers() {
    this.rest.getMany().subscribe(
      //res=>console.log(res)
      res => {
        let dto = res as ManyDto
        this.users = dto.data
      }
    )
  }




}
