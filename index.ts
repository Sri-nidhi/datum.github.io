import {
  Chart, Tooltip, Legend, PolarSeries, Category, ColumnSeries, RadarSeries, ChartDrawType, ILoadedEventArgs, ChartTheme
} from '@syncfusion/ej2-charts';
import { EmitType } from '@syncfusion/ej2-base';
import { Browser } from '@syncfusion/ej2-base';
Chart.Inject(Tooltip, Legend, PolarSeries, Category, ColumnSeries, RadarSeries);

let data: Object[] = [
  // {x: 'China', y: 9635, y1: 10535, y2: 11226, y3: 11218},
  { x: 'JPN', text: 'Japan', y: 5156, y1: 4849, y2: 4382, y3: 4939 },
  { x: 'DEU', text: 'Germany', y: 3754, y1: 3885, y2: 3365, y3: 3467 },
  { x: 'FRA', text: 'France', y: 2809, y1: 2844, y2: 2420, y3: 2463 },
  { x: 'GBR', text: 'UK', y: 2721, y1: 3002, y2: 2863, y3: 2629 },
  { x: 'BRA', text: 'Brazil', y: 2472, y1: 2456, y2: 1801, y3: 1799 },
  { x: 'RUS', text: 'Russia', y: 2231, y1: 2064, y2: 1366, y3: 1281 },
  { x: 'ITA', text: 'Italy', y: 2131, y1: 2155, y2: 1826, y3: 1851 },
  { x: 'IND', text: 'India', y: 1857, y1: 2034, y2: 2088, y3: 2256 },
  { x: 'CAN', text: 'Canada', y: 1843, y1: 1793, y2: 1553, y3: 1529 }
];
let chart: Chart = new Chart({
  height: '350',
  //Initializing Primary X Axis
  primaryXAxis: {
      valueType: 'Category',
      labelPlacement: 'OnTicks',
      interval: 1,
      startAngle: 90,
      coefficient: Browser.isDevice ? 80 : 100
  },

  //Initializing Chart Series
  series: [
      {
          type: 'Radar', drawType: 'Column', dataSource: data,
          animation: { enable: true },
          xName: 'x', yName: 'y', name: '2013', fill: '#0450C2', opacity : 0.4
      },


  ],
  legendSettings: {
      visible: false
  },


});
chart.appendTo('#Chart');