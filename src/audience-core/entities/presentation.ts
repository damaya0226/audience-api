import {Slide} from "./slide";

export class Presentation {
    private _id: string;
    private _pdfUrl: string;
    private _createdAt: number;
    private _updatedAt: number;
    private _slides: Slide[];

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get pdfUrl(): string {
        return this._pdfUrl;
    }

    set pdfUrl(value: string) {
        this._pdfUrl = value;
    }

    get createdAt(): number {
        return this._createdAt;
    }

    set createdAt(value: number) {
        this._createdAt = value;
    }

    get updatedAt(): number {
        return this._updatedAt;
    }

    set updatedAt(value: number) {
        this._updatedAt = value;
    }

    get slides(): Slide[] {
        return this._slides;
    }

    set slides(value: Slide[]) {
        this._slides = value;
    }
}
