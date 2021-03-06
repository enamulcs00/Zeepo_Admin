import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
import * as c3 from 'c3';

declare var require: any;

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // Barchart
  barChart: Chart = {
      type: 'Bar',
      data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [[50, 40, 30, 70, 50, 20, 30]]
      },
      options: {
          height: 290,
          chartPadding: {
              top: 15,
              left: -25
          },
          axisX: {
              showLabel: true,
              showGrid: false
          },
          axisY: {
              showLabel: false,
              showGrid: false
          },
          fullWidth: true
      }
  };

  // Line chart
  lineChart: Chart = {
      type: 'Line',
      data: {
          labels: ['1PM', '2PM', '3PM', '4PM', '5PM', '6PM'],
          series: [[2, 0, 5, 2, 5, 2]]
      },
      options: {
          showArea: true,
          showPoint: false,

          chartPadding: {
              left: -35
          },
          axisX: {
              showLabel: true,
              showGrid: false
          },
          axisY: {
              showLabel: false,
              showGrid: true
          },
          fullWidth: true
      }
  };

  ngAfterViewInit() {
      const chart2 = c3.generate({
          bindto: '#product-sales',
          data: {
              columns: [
                  ['user', 5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8],
                  // ['Ipad', 1, 2, 8, 3, 4, 5, 7, 6, 5, 6, 4, 3, 3, 12, 5, 6, 3]
              ],
              type: 'spline'
          },
          axis: {
              y: {
                  show: true,
                  tick: {
                      count: 0,
                      outer: false
                  }
              },
              x: {
                  show: true
              }
          },
          padding: {
              top: 40,
              right: 10,
              bottom: 40,
              left: 20
          },
          point: {
              r: 0
          },
          legend: {
              hide: false
          },
          color: {
              pattern: ['#fbb03b']
          }
      });
      const chart = c3.generate({
        bindto: '#income',
        data: {
          columns: [
            ['Growth Income', 100, 200, 300, 300, 400, 200],
            ['Net Income', 130, 100, 440, 200, 320, 100]
          ],
          type: 'bar'
        },
        bar: {
          space: 0.2,
          // or
          width: 15 // this makes bar width 100px
        },
        axis: {
          y: {
            tick: {
              count: 3,
              outer: false
            }
          }
        },
        legend: {
          hide: true
          // or hide: 'data1'
          // or hide: ['data1', 'data2']
        },
        grid: {
          x: {
            show: false
          },
          y: {
            show: true
          }
        },
        size: {
          height: 270
        },
        color: {
          pattern: ['#fbb03b', '#ccc']
        }
      });
    
      const chart3 = c3.generate({
        bindto: '#sales',
        data: {
          columns: [['One+', 50], ['T', 60], ['Samsung', 10]],
    
          type: 'donut'
        },
        donut: {
          label: {
            show: false
          },
          title: '',
          width: 18
        },
        size: {
          height: 150
        },
        legend: {
          hide: true
          // or hide: 'data1'
          // or hide: ['data1', 'data2']
        },
        color: {
          pattern: ['#ffffff', '#fbb03b', '#24d2b5', '#20aee3']
        }
      });
      // ==============================================================
      // Sales Prediction
      // ==============================================================
    
      const chart4 = c3.generate({
        bindto: '#prediction',
        data: {
          columns: [['data', 91.4]],
          type: 'gauge'
        },
    
        color: {
          pattern: ['#20aee3', '#20aee3', '#20aee3', '#24d2b5'], // the three color levels for the percentage values.
          threshold: {
            //            unit: 'value', // percentage is default
            //            max: 200, // 100 is default
            values: [30, 60, 90, 100]
          }
        },
        gauge: {
          width: 22
        },
        size: {
          height: 120,
          width: 150
        }
      });
  }
   // This is line chart
// bar chart
public lineChartLegend = true;
public lineChartType = 'line';

// events
public chartClicked(e: any): void {
  // console.log(e);
}

public chartHovered(e: any): void {
  // console.log(e);
}
public barChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true,
  barThickness: 10
};

public barChartLabels: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
public barChartType = 'bar';
public barChartLegend = true;

public barChartData: any[] = [ 
  { data: [65, 59, 80, 181, 56, 55, 40, 65, 64, 2, 3, 55, 40, 65, 64, 2, 3, 55 ], label: 'Bike' },
];
public barChartColors: Array<any> = [
  { backgroundColor: '#36bea6' }
];

//   user
public barChartLabels1: string[] = [
  'Filter 1',
  'Filter 2',
  'Filter 3',
  'Filter 4',
  'Filter 5',
  'Filter 6',
  'Filter 1',
  'Filter 2',
  'Filter 3',
  'Filter 4',
  'Filter 5',
  'Filter 6',
  'Filter 1',
  'Filter 2',
  'Filter 3',
  'Filter 4',
  'Filter 5',
  'Filter 6',
];
public barChartColors1: Array<any> = [
  { backgroundColor: '#fbb03b' }
];


// Click Labels 
public clickLabels: string[] = [
  'Call',
  'Text',
  'Email',
  'Get Directions',
];

public clickData: any[] = [ 
  { data: [90, 200, 340, 180], label: 'Clicks' },
];

}
