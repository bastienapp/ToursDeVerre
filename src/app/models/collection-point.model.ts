export class CollectionPoint { // DTO

  constructor(
    public id: string,
    public name: string,
    public location: number[],
    public openingHours: string,
    public address: string,
  ) { }
}
