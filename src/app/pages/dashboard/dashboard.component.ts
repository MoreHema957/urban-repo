import { Component, OnInit } from '@angular/core';
import {userList, prodList} from './mock-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  public productList = prodList;
  public userData = userList;
  constructor() {}

  ngOnInit(): void {}


 }
