import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private router: Router) { }

    logout() {
        this.authService.logout().subscribe(() => {
            sessionStorage.clear()
            this.authService.authtoken = ''
            this.router.navigate(['/login'])
        })
    }

    ngOnInit() {
    }

}
