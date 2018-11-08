export class Character {
    public name: string;
    public birth_year: string;
    public height: number;
    public mass: number;
    public hair_color: string;
    public skin_color: string;
    public species: string;
    public vehicles: number;

    constructor(
      name: string,
      birth_year: string,
      height: number,
      mass: number,
      hair_color: string,
      skin_color: string,
      species: string,
      vehicles: number
    ) {
      this.name = name;
      this.birth_year = birth_year;
      this.height = height;
      this.mass = mass;
      this.hair_color = hair_color;
      this.skin_color = skin_color;
      this.species = species;
      this.vehicles = vehicles;
    }
  }
