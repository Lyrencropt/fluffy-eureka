import { IHero } from "./Hero";

export interface IAbility {
    id: number;
    name: string;
    description: string;
    is_ultimate: boolean;
    hero: IHero;
}