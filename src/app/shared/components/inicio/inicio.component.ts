import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../users/services/user.service';
import { AllDataShops, ApiResponse } from '../../../users/models/user-info-model';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  userData!: ApiResponse;
  shops!:AllDataShops;
  stars:number=0;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.userService.getUserData().subscribe({ 
    //   next: (data) => {
    //     console.log(data);
    //     this.userData = data;
    //     var califications=this.userData.seller.seller_reputation.level_id;
    //     var stars = this.extractNumber(califications);
    //     console.log(stars);
    //   },
    //   error: (error) => {
    //     console.error('Error fetching data', error);
    //   }
    // }
    // );

    this.userService.getAllUserDataShops().subscribe({ 
      next: (data) => {
        console.log(data);
        this.shops = data;
        this.shops.dataShops.forEach(shop => {
          var califications=shop.seller.seller_reputation.level_id;
          
        });
      },
      error: (error) => {
        console.error('Error fetching data', error);
      }
    }
    );
  }
  getCalification(str: string): number{
    let i = 0;
    while (i < str.length && !isNaN(parseInt(str[i], 10))) {
      i++;
    }
    return parseInt(str.substring(0, i), 10);
  }
}
