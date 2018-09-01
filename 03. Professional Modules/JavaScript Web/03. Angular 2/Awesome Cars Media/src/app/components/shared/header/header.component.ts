import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(public authService: AuthService) { }

    ngOnInit() {
    }

    logout() {
        this.authService.logout().subscribe()
    }


    myFunction() {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive-menu";
        } else {
            x.className = "topnav";
        }
    }
}
