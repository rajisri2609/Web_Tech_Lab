import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
 selector: 'app-details',
 standalone: true,
 imports: [
 CommonModule,
 ReactiveFormsModule
 ],
 template: `
 <article>
 <img class="listing-photo" [src]="housingLocation?.photo"
 alt="Exterior photo of {{housingLocation?.name}}"/>
 <section class="listing-description">
 <h2 class="listing-heading">{{housingLocation?.name}}</h2>
 <p class="listinglocation">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
 </section>
 <section class="listing-features">
 <h2 class="section-heading">About the tourist spot</h2>
 <ul>
 <li>Best season to visit: {{housingLocation?.season}}</li>
 <li>Best month to visit: {{housingLocation?.month}}</li>
 <li>Accomodation during the season/month: {{housingLocation?.accomodation}}<
/li>
 </ul>
 </section>
 <section class="listing-apply">
 <h2 class="section-heading">Book now to visit</h2>
 <form [formGroup]="applyForm" (submit)="submitApplication()">
 <label for="first-name">Name</label>
 <input id="first-name" type="text" formControlName="firstName">
 <label for="email">Email</label>
 <input id="email" type="text" formControlName="email">
 <label for="phone">Phone</label>
 <input id="phone" type="email" formControlName="phone">
 <button type="submit" class="primary">Book now</button>
 </form>
 </section>
 </article>
 `,
 styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
 route: ActivatedRoute = inject(ActivatedRoute);
 housingService = inject(HousingService);
 housingLocation: HousingLocation | undefined;
 applyForm = new FormGroup({
 firstName: new FormControl(''),
 lastName: new FormControl(''),
 email: new FormControl('')
 });
 constructor() {
 const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
 this.housingLocation = this.housingService.getHousingLocationById(housingLocationI
d);
 }
 submitApplication() {
 this.housingService.submitApplication(
 this.applyForm.value.firstName ?? '',
 this.applyForm.value.lastName ?? '',
 this.applyForm.value.email ?? ''
 );
 }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
