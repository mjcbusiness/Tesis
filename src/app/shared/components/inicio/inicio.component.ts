import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../users/services/user.service';
import { AllDataShops, ApiResponse } from '../../../users/models/user-info-model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  userData!: ApiResponse;
  shops!:AllDataShops;
  stars:number=0;
  user:string | null | undefined;
  constructor(private userService: UserService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('user')) {
        const user = params.get('user');
        this.user = user;
      }
    });
       
    this.userService.getAllUserDataShops().subscribe({ 
      next: (data) => {
        console.log(data);
        this.shops = data;
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
