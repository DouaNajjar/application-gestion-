export class Article {
    public get titre(): string {
        return this._titre;
    }
    public set titre(value: string) {
        this._titre = value;
    }
    public get score(): number {
        return this._score;
    }
    public set score(value: number) {
        this._score = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get date(): string {
        return this._date;
    }
    public set publicationDate(value: string) {
        this._date = value;
    }
    public get photo(): string {
        return this._photo;
    }
    public set photo(value: string) {
        this._photo = value;
    }
    incremente(): void {
        if (this.score > 0) {
        this.score += 1;
      }}
    
    décremente(): void {
        if (this.score > 0) {
          this.score -= 1;
        }
      }
    constructor(
        private _titre: string,
        private _photo: string,
        private _date: string,
        private _description: string,
        private _score: number=0,
      ) {
        
      }
    
}
