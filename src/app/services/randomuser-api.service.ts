import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomuserAPIService {
  constructor() {}

  async initRandomuserAPI() {
    try {
      const response = await fetch('https://randomuser.me/api/?results=10'); // Fetch 10 users
      const data = await response.json();
      console.log("API response data:", data); // Debugging line
      return data;
    } catch (error) {
      console.error("Error fetching from API:", error);
      throw error; // Re-throw the error for further handling if needed
    }
  }
}
