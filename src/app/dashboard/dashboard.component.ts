import { Component, OnInit } from '@angular/core';
import { DashboardConfigService } from '../dashboard-config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  widgets: any[] = [];

  constructor(private dashboardService: DashboardConfigService) { }

  ngOnInit() {
    this.loadWidgets();
  }

  loadWidgets() {
    this.dashboardService.getWidgets().subscribe(data => {
      this.widgets = data;
    });
  }

  getChartData(widget: any): any {
    return {
      labels: widget.labels,
      datasets: [{
        label: widget.datasetLabel || 'Dataset',
        data: widget.datasetData.map((d: any) => +d), 
        backgroundColor: widget.backgroundColor,
        borderColor: widget.borderColor,
        fill: widget.fill || false
      }]
    };
  }


//   dashboardConfig: any[] = [];
//   isLoading: boolean = true;

//   constructor(private configService: DashboardConfigService) {}

//   ngOnInit(): void {
//     this.configService.getConfig().subscribe(data => {
        
//         this.dashboardConfig = data;
//         this.isLoading = false; // Set isLoading to false once data is received
//       });
    
// }

}

 

