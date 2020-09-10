import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myTeam11';
  showAddUser = false;
  editData = false;
  selectedUser = null;
  userList = [
    {
      name: 'saurav',
      dob: '03/01/1998',
      gender: 'male',
      pin: '111111',
      state: 'uttarakhand',
      city: 'pithoragarh',
      file: null,
      id: 0,
    },
    {
      name: 'aanya',
      dob: '03/01/1990',
      gender: 'female',
      pin: '111111',
      state: 'delhi',
      city: 'new delhi',
      file: null,
      id: 1,
    },
    {
      name: 'Aditi',
      dob: '03/01/1990',
      gender: 'female',
      pin: '111111',
      state: 'delhi',
      city: 'new delhi',
      file: null,
      id: 2,
    },
    {
      name: 'Riya',
      dob: '03/01/1990',
      gender: 'female',
      pin: '111111',
      state: 'delhi',
      city: 'new delhi',
      file: null,
      id: 3,
    },
    {
      name: 'Priya',
      dob: '03/01/1990',
      gender: 'female',
      pin: '111111',
      state: 'delhi',
      city: 'new delhi',
      file: null,
      id: 4,
    },
  ];

  showAddUserForm() {
    this.showAddUser = true;
  }

  addNewUSer(userDetails) {
    const user = { ...userDetails, id: this.userList.length };
    this.userList.push(user);
    alert(
      'user added, please dont refresh and go to show list button on top left'
    );
  }

  deleteUser(user) {
    // console.log(user);
    this.userList = this.userList.filter((User) => {
      return User.id !== user.id;
    });
    console.log(this.userList);
  }

  editUser(user) {
    console.log(user);
    // const index  = this.userList.indexOf(user);
    this.showAddUser = true;
    this.editData = true;
    this.selectedUser = user;
  }
  editUserDetails(user) {
    this.userList = this.userList.filter((User) => {
      return User.id !== user.id;
    });
    console.log(user);
    const userDetails = { ...user };
    this.userList.push(userDetails);
    alert(
      'user edited, please dont refresh and go to show list button on top left'
    );
  }
}
