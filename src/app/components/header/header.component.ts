import { Component, OnInit } from '@angular/core';
import { UlService } from 'src/app/service/ul.service'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Mi lista de Tareas';
  showAddTask: boolean = true;
  subscription?: Subscription;

  constructor(
    private ulService: UlService,
    private router: Router
  ) {
    this.subscription = this.ulService.onToggle()
      .subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.ulService.toggleAddTask();
  }
  hasRoute(route: string){
    return this.router.url === route
  }

}
