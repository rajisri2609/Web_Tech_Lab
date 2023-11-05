import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
@Injectable({
 providedIn: 'root',
})
export class HousingService {
 readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
 protected housingLocationList: HousingLocation[] = [
 {
 id: 0,
 name: 'Taj Mahal',
 city: 'Agra',
 state: 'Uttar Pradesh',
 photo: `https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/PTVIndia-Cover-Final.png`,
 season: 'winter',
 month: 'December',
 accomodation: true,
 },
 {
 id: 1,
 name: 'Golden Temple',
 city: 'Amritsar',
 state: 'Punjab',
 photo: `https://housing.com/news/wp-content/uploads/2022/11/Famous-touristplaces-in-India-state-compressed.jpg`,
 season: 'Summer',
 month: 'April',
 accomodation: true,
 },
 {
 id: 2,
 name: 'Lotus Temple',
 city: 'New Delhi',
 state: 'Delhi',
 photo: `https://www.thomascook.in/blog/wpcontent/uploads/2018/04/placestovisitinindiablog.jpg`,
 season: 'winter',
 month: 'August',
 accomodation: true,
 },
 {
 id: 3,
 name: 'Calangute Beach',
 city: 'Goa',
 state: '',
 photo: `https://www.thomascook.in/blog/wpcontent/uploads/2018/04/Arambol_beach_2009-e1523596794811.jpg`,
 season: 'Summer',
 month: 'May',
 accomodation: true,
 },
 {
 id: 4,
 name: 'Backwaters',
 city: 'Kochi',
 state: 'Kerala',
 photo: `https://www.thomascook.in/blog/wp-content/uploads/2018/04/keralatours3.jpg`,
 season: 'Monsoon',
 month: 'August',
 accomodation: true,
 },
 {
 id: 5,
 name: 'Ladakh Lake',
 city: 'Ladakh',
 state: 'Jammu and kashmir',
 photo: `https://www.thomascook.in/blog/wp-content/uploads/2018/04/wonders-ofladakh-1-e1523597251360.jpg`,
 season: 'winter',
 month: 'September',
 accomodation: true,
 },
 {
 id: 6,
 name: 'River Ganges',
 city: 'Varnasi',
 state: 'Uttar pradesh',
 photo: `https://www.thomascook.in/blog/wp-content/uploads/2018/04/Varanasi.jpg`,
 season: 'winter',
 month: 'September',
 accomodation: true,
 },
 {
 id: 7,
 name: 'Coorg',
 city: 'Kodagu',
 state: 'Karnataka',
 photo: `https://www.thomascook.in/blog/wpcontent/uploads/2018/04/Mandal_patti_coorg_dist02.jpg`,
 season: 'winter',
 month: 'September',
 accomodation: true,
 },
 {
 id: 8,
 name: 'Rohtang pass',
 city: 'Manali',
 state: 'Jammu and Kashmir',
 photo: `https://www.thomascook.in/blog/wp-content/uploads/2018/05/Manalie1525693032549.jpg`,
 season: 'winter',
 month: 'September',
 accomodation: true,
 },
 {
 id: 9,
 name: 'Mysore Palace',
 city: 'Mysore',
 state: 'Karnataka',
 photo: `https://www.thomascook.in/blog/wp-content/uploads/2018/05/Mysore1-
e1525693243353.jpg`,
 season: 'spring',
 month: 'march',
 accomodation: true,
 },
 ];
 getAllHousingLocations(): HousingLocation[] {
 return this.housingLocationList;
 }
 getHousingLocationById(id: number): HousingLocation | undefined {
 return this.housingLocationList.find(
 (housingLocation) => housingLocation.id === id
 );
 }
 submitApplication(firstName: string, lastName: string, email: string) {
 console.log(
 `Homes application received: firstName: ${firstName}, lastName: ${lastName}, ema
il: ${email}.`
 );
 }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
