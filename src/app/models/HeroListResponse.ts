import { IHero } from "./Hero";

export interface IHeroListResponse {
    total: number;
    data: IHero[];
}