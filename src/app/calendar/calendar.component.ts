import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatCalendar, MatDatepickerModule } from "@angular/material/datepicker";
import { MaterialJalaliMomentAdapterModule } from "@app/mat-jalali-adaptor";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MaterialJalaliMomentAdapterModule,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent  implements OnInit {
  selected: any;

  @ViewChild('calendar', { static:true }) matCalendar: ElementRef<any>

  ngOnInit(): void {
    // console.log(this.matCalendar.nativeElement)
  }
}
