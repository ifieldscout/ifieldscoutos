import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { globalResponse } from '../models/globalResponse';
import { Case } from '../models/case';

@Component({
  selector: 'app-case-detail',
  template: `
  <div class="container-fluid">
    <div class="bkgrndImage">
        <img class="img" alt="" src="../assets/iFieldLogo.png" width="125" height="35" />
        <button class="btn btn-secondary dropdown-toggle" type="button"
						data-toggle="dropdown">
						<img src="" class="img-circle"
							style="width: 30px; height: 30px;">&nbsp; <b>User Name</b>
						<span class="caret"></span>

				</button>
    </div>
    <nav class="navbar navbar-dark bg-dark">
        <div class="navbar-expand mr-auto">
            <div class="navbar-nav" routeLinkActive="active">
                <a class="nav-item nav-link" routerLink="">Home</a>
                <a class="nav-item nav-link" routerLink="">Advanced Support</a>
            </div>
        </div>
    </nav>
  </div>
  <pre></pre>
  <pre></pre>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>Welcome to iFieldScout!</h1>
        <h6 style="margin-bottom: 0px;">Your trusted way for grievance addressal.</h6>
      </div>
      <div class="col-md-6">
        <div class="button">
          <button class="btn btn-info btn-lg" data-toggle="modal" data-target="#newCaseModal">New Case</button>
        </div>
      </div>
    </div>
    <pre></pre>
    <pre></pre>
    <div class="row">
      <div class="col-md-3">
        <section style="border: 0.02px solid #d6d6d6ec">&nbsp; ACTIVE CASES</section>
        <section style="border: 0.02px solid #d6d6d6ec; color: white; background-color: darkgrey">
          Case{{globalCase[0].caseno}}
        </section>
        <section class="premium">Go Premium to manage more cases!</section>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col-sm-8">
            <h5>Case{{globalCase[0].caseno}}</h5>
            <p>{{globalCase[0].description}} </p>
          </div>
          <div class="col-sm-4">
            <h5>Contact Site Engineer</h5>
            <h6>{{globalCase[0].ServiceEnggName}}</h6>
            <h6>{{globalCase[0].ServiceEnggPhone}}</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-8">
            <section style="border: 0.02px solid #d6d6d6ec">
              <span class="glyphicon glyphicon-briefcase"></span>&nbsp; LIVE TRACK
            </section>
            &nbsp;
            <img class="map" src="../assets/clientMap.png" width="545">
          </div>
          <div class="col-sm-4">
            <section style="border: 0.02px solid #d6d6d6ec">
                <span class="glyphicon glyphicon-briefcase"></span>&nbsp; STATUS
            </section>
            <br />
            <div class="circle">
              <h2 class="h5">{{globalCase[0].cstatus}}</h2>
              <div class="v-line">
                  <p class="help-block">{{globalCase[0].createdAt}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md">
        <section style="border: 0.02px solid #d6d6d6ec">
            <span class="glyphicon glyphicon-briefcase"></span>&nbsp;
            ACTIVITY FEED
        </section>
        <form action="">
            <div class="form-group">
                <label for="usr">Comment </label> <input type="text"
                    class="form-control" id="usr">
            </div>
            <button class="btn btn-info" type="submit" style="float: right;">
                Comment</button>
        </form>
      </div>
    </div>
  </div>
<pre></pre> 
<div class="row" style="background-color: #524e4e; color: white; height: 110px;">
  <div class="footer">
    <table>
      <thead> 
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="width: 570px;">
            iFieldScout<sup><i class="fa fa-registered" style="font-size: 9px;"></i></sup>
          </td>
          <td style="width: 450px;">
            <a>Upgrade to premium</a>
          </td>
          <td>
          <a href="https://www.itssrc.com" target="_blank">About ITSSRC</a>
          </td>
        </tr>
        <tr>
          <td>
            Made in Bangalore, IN &middot; Copyright
            <sup> 
              <i class="fa fa-copyright" style="font-size: 9px;"></i>
            </sup>2018 &middot; All rights reserved
          </td>
          <td>
            Terms of services
          </td>
          <td>
            Blog
          </td>
        </tr>
        <tr>
          <td>
            <i class="fa fa-adn" style="font-size: x-large; color: darkcyan;"></i>
          </td>
          <td>
            Privacy policy
          </td>
          <td>
            Help & Support
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div> `,
  styles: [
    '.bkgrndImage { background: url("../assets/bgtop.jpg") no-repeat; background-size: cover; background-position: center;padding-top: 100px;padding-bottom: 100px;}',
    '.button {padding-top: 50px;padding-left: 300px;border-color: #22292f;margin-left: 100px;}',
    '.img {position: absolute;top: 70px;left: 150px;}',
    'section {margin-top: 8px;padding: 1rem;background-color: #f5f5f5;height: 55px;}',
    '.circle {width: 20px;height: 20px;background-color: #14a2a2;border-radius: 50%;border-style: solid;border-width: thin;margin-left: 15px;}',
    '.circle-1 {width: 20px;height: 20px;background-color: #c0c0c0;border-radius: 50%;border-width: thin;margin-left: 15px;}',
    '.h5{width: 150px;margin-bottom: 0px;margin-left: 35px;margin-top: 0px;font-size: medium;}',
    'div.v-line {margin-left: 9px;}',
    'div.v-line-1 {width: 1px;background-color: white;height: 42px;float: left;margin-left: 9px;}',
    '.map {-webkit-filter: blur(3px);-moz-filter: blur(3px);-o-filter: blur(3px);-ms-filter: blur(3px);filter: blur(3px);}',
    'p.help-block {width: 200px;margin-left: 26px;margin-top: 0px;margin-bottom: 0px;font-size: x-small;}',
    'section.premium {border: thin dashed;height: 80px;background-color: white;text-align: start;font-size: 18px;color: #b7abab;border-color: #696060;}',
    '.btn-primary {border-radius: 30px;margin-left: 180px;}',
    '.footer {margin-left: 50px;margin-top: 20px;}',
    '.btn-secondary, .btn-secondary:hover, .btn-secondary:focus {background-color: #0000;color: white;}',
    'ul.status {font-size: xx-large;direction: rtl;}',
    'li span {font-size: medium;}',
    'div#card {border: 1px solid;}'
  ]
})
export class CaseDetailComponent implements OnInit {

  public caseid;
  public globalResponse: globalResponse;
  public globalCase: Case;
  constructor(private auth: AuthService, private user: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    let cid = this.route.snapshot.paramMap.get('caseid');
    this.caseid = cid;

    this.auth.getOauthToken().subscribe((res) => {
      this.auth.storeToken(res.access_token.token)
      console.log(res.access_token.token)
    }, 
    (err) => {
      console.log('Err is ', err)
    });

    this.caseid = this.route.snapshot.params["caseid"];
    console.log(this.caseid)
    this.user.getCaseById(this.caseid).subscribe((result) => {
      this.globalCase = result;
      console.log(this.globalCase[0].ServiceEnggName)
    });
  }
}
