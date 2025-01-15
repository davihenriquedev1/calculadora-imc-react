import { Level } from "@/types/Level";

export const levels : Level[] = [
    { title: 'Magreza', color:'#96A3AB', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color:'#0EAD69', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Sobrepeso', color:'#EDB039', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color:'#C3423F', icon: 'down', imc: [30.1, 99] }
];