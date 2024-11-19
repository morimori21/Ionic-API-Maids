import { Component, OnInit } from '@angular/core';
import { RandomuserAPIService } from 'src/app/services/randomuser-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public randomUsers: any[] = []; // Original list of all users
  public filteredUsers: any[] = []; // List for filtered users

  constructor(private _RandomuserAPI: RandomuserAPIService) {}

  ngOnInit() {
    this.fetchRandomuserAPIFromService();
  }

  public async fetchRandomuserAPIFromService() {
    try {
      const data = await this._RandomuserAPI.initRandomuserAPI();
      this.randomUsers = data.results || [];
      this.filteredUsers = this.randomUsers; // Initialize filteredUsers with all users
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  }

  public filterByGender(gender: string) {
    this.filteredUsers = this.randomUsers.filter(user => user.gender === gender);
  }

  public resetFilter() {
    this.filteredUsers = this.randomUsers; // Reset to show all users
  }
}
