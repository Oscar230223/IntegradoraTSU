export class QR{
    _id?: number;
    niño: string;
    salon: number;
    padre: string;
    telefono: number;
    persona: string;
    
    constructor(niño: string,salon: number, padre: string, telefono: number, persona: string){
        this.niño = niño;
        this.salon = salon;
        this.padre = padre;
        this.telefono = telefono;
        this.persona = persona;

    }
}