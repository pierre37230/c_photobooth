import cityData from './cities.json';
export interface City { slug:string; name:string; postalCode:string; distanceFromTours:number|null; }
export const cities:City[]=cityData;
export const getCityBySlug=(slug:string)=>cities.find(c=>c.slug===slug);
export const getAllCitiesForSitemap=()=>cities;
