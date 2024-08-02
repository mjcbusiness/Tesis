import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllDataShops } from 'src/app/users/models/user-info-model';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() isOpen:Boolean = false;
  constructor(private userService:UserService,private router:Router) { }
  nickname:String='';
  shops!:AllDataShops;
  ngOnInit(): void {
    this.userService.getAllUserDataShops().subscribe({ 
      next: (data) => {
        console.log(data);
        this.shops=data;
      },
      error: (error) => {
        console.error('Error fetching data', error);
      }
    }
    );
  }
  viewInfoCard(nickname:String) {
    // Redirige a /infoCardShop/nombreShop
    this.router.navigate([`/infoCardShop/${nickname}`]);
  }
}
