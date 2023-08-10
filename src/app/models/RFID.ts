export class RFID {
    _id?: number;
    niño: string;
    salon: number;
    padre: string;

    constructor(niño: string, salon: number,padre: string){
        this.niño = niño;
        this.salon = salon;
        this.padre = padre;
    }
}
