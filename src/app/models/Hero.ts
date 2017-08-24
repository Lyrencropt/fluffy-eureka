import { IRole } from "./Role";
import { IAbility } from "./Ability";

export interface IHero {
    id: number;
    name: string;
    real_name: string;
    description: string;
    health: number;
    armour: number;
    shield: number;
    age: /*ain't nothin but a*/ number;
    height: string;
    affiliation: string;
    base_of_operations: string;
    difficulty: number;
    role: IRole;
    sub_roles: IRole[];
    abilities: IAbility[];
}

