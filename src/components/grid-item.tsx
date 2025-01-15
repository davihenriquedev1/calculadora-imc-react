
import { Level } from "@/types/Level"

type Props = {
   item: Level
}

export const GridItem = ({item}:Props) => {                
    return (
        <div className={`flex flex-col flex-1 rounded-md text-white justify-center items-center p-5`} style={{backgroundColor:item.color}}>
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-black/10">
                <img src={item.icon === 'up'? '/images/up.png' : '/images/down.png'} className="w-7" title={item.icon}/>
            </div>
            <div className="text-lg font-bold mt-1">{item.title}</div>
            {item.yourImc && 
                <div className="text-lg mt-3 mb-14">Seu IMC é de {item.yourImc} kg/m2</div>
            }
            <div className="text-sm mt-3">
                <>
                    IMC entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    ) 
}