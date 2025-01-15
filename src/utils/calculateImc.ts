import { levels } from "@/constants/levels";

export const calculateImc = (height: number, weight:number) => {

    const imc = weight / (height * height);

    for(let i in levels) {
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
            let levelCopy = {...levels[i]};
            levelCopy.yourImc = parseFloat(imc.toFixed(2))
            return levelCopy;
        }
    }

    return null
}