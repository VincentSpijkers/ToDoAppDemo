export class Task{
  public name: string;
  public id: number;
  public finished: boolean;
  public collectionId: number;


  constructor(name: string, id: number, finished: boolean, collectionId: number) {
    this.name = name;
    this.id = id;
    this.finished = finished;
    this.collectionId = collectionId;
  }
}
