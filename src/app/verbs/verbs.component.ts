import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
interface UserData {
  id: number;
  name: string;
  email: string;
}
@Component({
  selector: 'app-verbs',
  templateUrl: './verbs.component.html',
  styleUrls: ['./verbs.component.css']
})
export class VerbsComponent {
  users: UserData[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more user data as needed
  ];

  // Pagination variables
  currentPage = 1;
  itemsPerPage = 5; // Number of items to display per page
  jsonData: any;
  jsonUrl = 'assets/verbs.json'
  constructor(private httpClient: HttpClient) {
    this.jsonData = httpClient.get(this.jsonUrl).subscribe(c => {
      this.jsonData = c;
      console.log(this.jsonData);
    })
  }

  lastPage(){
    this.currentPage = Math.ceil(this.users.length / this.itemsPerPage)
  }
}
