import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  userList = [
    {
      name: 'saurav',
      dob: '03/01/1998',
      Gender: 'male',
      Pin: '111111',
      state: 'uttarakhand',
      city: 'pithoragarh',
    },
  ];
  constructor() {}
}
