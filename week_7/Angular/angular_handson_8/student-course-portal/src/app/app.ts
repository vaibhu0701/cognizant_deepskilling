import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { AuthService } from './services/auth.service';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  CommonModule,
  RouterOutlet,
  Header],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  constructor(
    private auth: AuthService,
    public loadingService: LoadingService
  ) {
    this.auth.login();
  }

}