import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-ux-parameters',
  templateUrl: './ux-parameters.component.html',
  styleUrls: ['./ux-parameters.component.scss'],
  animations: [
    trigger('balloonEffect', [
      state('initial', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('final', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('final=>initial', animate('1000ms')),
      transition('initial=>final', animate('1500ms'))
    ]),
  ]
})
export class UxParametersComponent implements OnInit {

  constructor() { }
  currentState = 'initial';

changeState() {
  this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
}

  uxParametersList = [
    { parameterName: 'Perception', description: 'Perception allows users of all abilities to understand, use and enjoy the web' },
    { parameterName: 'Accessibility', description: 'Accessibility allows users of all abilities to understand, use and enjoy the web' },
    { parameterName: 'Discoverability', description: 'Discoverability allows users of all abilities to understand, use and enjoy the web' },
    { parameterName: 'Omni-Channel', description: 'Omni-Channel allows users of all abilities to understand, use and enjoy the web' },
    { parameterName: 'Performance', description: 'Performance allows users of all abilities to understand, use and enjoy the web' },
    { parameterName: 'Social Shareability', description: 'Social Shareability allows users of all abilities to understand, use and enjoy the web' }
  ];
  ngOnInit(): void {
  }

}
