import { AfterViewInit, Component } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';
import {
  steps as defaultSteps,
  defaultStepOptions,
} from './promotion.tour.config';
import Step from 'shepherd.js/src/types/step';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent implements AfterViewInit {
  public img = [
    'https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg',
    'https://images.pexels.com/photos/18353685/pexels-photo-18353685/free-photo-of-a-man-standing-on-the-edge-of-a-rocky-mountain.jpeg',
    'https://images.pexels.com/photos/18269733/pexels-photo-18269733/free-photo-of-a-luxury-waterfront-building-surrounded-by-palm-trees.jpeg',
  ];
  constructor(
    private shepherdService: ShepherdService,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit() {
    this.shepherdService.defaultStepOptions = defaultStepOptions;
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    this.shepherdService.addSteps(defaultSteps as Array<Step.StepOptions>);
    this.route.queryParams.subscribe(({ showGuide }) => {
      if (showGuide === 'true') {
        this.shepherdService.start();
      }
    });
  }
}
