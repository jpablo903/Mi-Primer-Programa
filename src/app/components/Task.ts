//Acá se maneja la "base de datos emulada".
export interface Task {
    id?: number, //Cuando creammos podria no venir, por eso el signo "?"
    text: string;
    day: string;
    reminder: boolean;

}