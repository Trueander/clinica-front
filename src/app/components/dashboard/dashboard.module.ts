import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { CalendarComponent } from './calendar/calendar.component';

import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


@NgModule({
    declarations: [
      DashboardComponent,
      BarChartComponent,
      HeaderComponent,
      CalendarComponent
    ],
    imports: [
      CommonModule,
      DashboardRoutingModule,
      NgxChartsModule,
      FormsModule,
      FlatpickrModule.forRoot(),
      CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    ]
  })
  export class DashboardModule { }