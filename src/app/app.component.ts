import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from "@app/calendar/calendar.component";
import { Calendar2Component } from "@app/calendar2/calendar2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CalendarComponent, Calendar2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ang-17';

}
