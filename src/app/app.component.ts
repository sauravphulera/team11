import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myTeam11';
  showAddUser = false;
  userList = [
    {
      name: 'saurav',
      dob: '03/01/1998',
      gender: 'male',
      pin: '111111',
      state: 'uttarakhand',
      city: 'pithoragarh',
      file: null,
    },
    {
      name: 'abhishek',
      dob: '03/01/1998',
      gender: 'male',
      pin: '111111',
      state: 'uttarakhand',
      city: 'pithoragarh',
      file: null,
    },
  ];

  showAddUserForm() {
    this.showAddUser = true;
  }

  addNewUSer(userDetails) {
    const user = userDetails;
    this.userList.push(user);
  }
}
