import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: '../home/home.component.html',
    styleUrls: ['../home/home.component.scss']
})

export class HomeComponent {
    title: string;
    constructor(
        private router: Router,
        private authService: AuthService
    ) {
        this.title = 'Welcome to the Home Page';
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['../']);
    }
}