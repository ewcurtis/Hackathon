import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SaveData } from '../services/saveData';

@Injectable({
    providedIn: 'root'
})
export class SaveDataService {

    constructor(private http: HttpClient) { }
    saveDetails: SaveData = new SaveData('','','','','','','','','','');
    getData() {
        return this.saveDetails;
    }

    saveData(saveDetails2: SaveData) {
        this.saveDetails = saveDetails2;

    }
}
