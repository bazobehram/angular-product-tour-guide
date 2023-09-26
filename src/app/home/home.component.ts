import { AfterViewInit, Component } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';
import {
  getSteps as defaultSteps,
  defaultStepOptions,
} from './home.tour.config';
import Step from 'shepherd.js/src/types/step';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  public img = [
    "https://images.pexels.com/photos/461593/pexels-photo-461593.jpeg",
    "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg",
    "https://images.pexels.com/photos/4529049/pexels-photo-4529049.jpeg"
  ];
  
  constructor(
    private shepherdService: ShepherdService,
    public router: Router
  ) {}

  ngAfterViewInit() {
    this.shepherdService.defaultStepOptions = defaultStepOptions;
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    const steps = defaultSteps(this.router, this.shepherdService);
    this.shepherdService.addSteps(steps as Array<Step.StepOptions>);
    this.shepherdService.start();
  }
}
