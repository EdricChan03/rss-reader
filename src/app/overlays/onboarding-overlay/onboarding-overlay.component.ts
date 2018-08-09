import { OverlayService } from '../../overlay.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
	selector: 'app-onboarding-overlay',
	templateUrl: './onboarding-overlay.component.html',
	styleUrls: ['./onboarding-overlay.component.scss'],
	animations: [
		trigger(
			'enterAnimation', [
				state('leave', style({ transform: 'scale(0)', opacity: 0 })),
				state('enter', style({ transform: 'scale(1)', opacity: 1 })),
				transition('enter <=> leave', animate('200ms ease-in-out'))
			]
		)
	]
})
export class OnboardingOverlayComponent {
	index: 0 | 1 | 2 | 3 = 0;
	content = [
		{
			content: '',
			imgSrc: ''
		},
		{
			content: 'Multiple news sources. One reader.',
			imgSrc: 'assets/img/News Article.png'
		},
		{
			content: 'Customizable. Tons of options.',
			imgSrc: 'assets/img/Customizing UI.png'
		},
		{
			content: 'Many news sources to explore!',
			imgSrc: 'assets/img/Explore News Sources.png'
		}];

	constructor(
		private router: Router,
		private overlayService: OverlayService
	) { }
	prevIndex() {
		if (this.index !== 0) {
			this.index--;
		}
	}
	nextIndex() {
		if (this.index !== 3) {
			this.index++;
		} else {
			this.gettingStarted();
		}
	}
	goToIndex(index: 0 | 1 | 2 | 3) {
		console.log(index);
		this.index = index;
	}
	closeOverlay() {
		this.overlayService.close();
	}
	gettingStarted() {
		this.router.navigate(['/home']);
		this.closeOverlay();
	}
}
