import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/users/models/user-info-model';

@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.css']
})
export class CardShopComponent implements OnInit {
  
  @Input() infoCard!:ApiResponse;
  @Input() calification:number|undefined;

  get starsArray(): number[] {
    return this.calification ? Array(this.calification).fill(0) : [];
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  viewInfoCard() {
    if (this.infoCard && this.infoCard.seller && this.infoCard.seller.nickname) {
      // Redirige a /infoCardShop/nombreShop
      this.router.navigate([`/infoCardShop/${this.infoCard.seller.nickname}`]);
    }
  }
}
