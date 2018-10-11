import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { globalResponse } from './models/globalResponse';
import { UserService } from './user.service';
import { Case } from './models/case';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //caseModel = new Case('');
  //public globalResponse: globalResponse;
  //caseid: string;
  constructor(private auth: AuthService, private user: UserService, private router: Router) { }
  ngOnInit(): void {
    
    /*this.auth.getOauthToken().subscribe((res) => {
      this.auth.storeToken(res.access_token.token)
      //console.log(res.access_token.token)
    }, 
    (err) => {
      console.log('Err is ', err)
    });

    this.caseid = this.route.snapshot.params["caseid"];
    console.log(this.caseid)
    this.user.getCaseById(this.caseid).subscribe((result) => {
      this.globalResponse = result;
    });*/
  }

  
}
