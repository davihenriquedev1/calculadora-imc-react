"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { useState } from "react";
import { GridItem } from "./grid-item";
import { calculateImc } from "@/utils/calculateImc";
import { Level } from "@/types/Level";
import { levels } from "@/constants/levels";

const ImcCalculator = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [showLevel, setShowLevel] = useState<Level | null >(null)

    const schema = z.object({
        height:z.number({message:'digite um número'}).min(1,'insira sua altura'),
        weight:z.number({message:'digite um número'}).min(1,'insira seu peso')
    })
    type FormData = z.infer<typeof schema>

    const {register, reset, handleSubmit, setValue, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = () => {
        if((height > 0) && (weight > 0)) {
            setShowLevel(calculateImc(height, weight))
        }
    }

    const handleBackButton = () => {
        setShowLevel(null);
        setWeight(0);
        setWeight(0)
        reset()
    }

    return (
        <div className="flex max-w-full gap-10 flex-col md:flex-row">
            <div className="flex-1 mr-0 md:mr-2">
                <h1 className="text-3xl font-bold my-3 text-[#3A4B5C]">Calcule o seu IMC</h1>
                <p className="my-2 text-[#6A7D9B]">IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.</p>
                <form 
                    onSubmit={handleSubmit(onSubmit)}
				    autoComplete="on"
				    encType="multipart/form-data"
                >   
                    <div className="flex flex-col">
                        <input
                            {...register('height', {
                                onChange:(e)=> {
                                    setValue('height', e.target.value)
                                    setHeight(e.target.value)
                                },
                                valueAsNumber:true
                            })}
                            disabled={showLevel !== null}
                            placeholder="Digite a sua altura em metros. ex.: 1.80"
                            title="height"
                            className="border-b-2 border-[150, 163, 171, .5] outline-none py-3 px-1 mb-5 disabled:opacity-55"
                        />
                        {errors.height && <div className="text-red-600">{errors.height.message}</div>}
                    </div>
                    <div className="flex flex-col">
                        <input
                            {...register('weight', {
                                onChange:(e)=> {
                                    setValue('weight', e.target.value)
                                    setWeight(e.target.value)
                                },
                                valueAsNumber:true
                            })}
                            disabled={showLevel !== null}
                            placeholder="Digite seu peso em kg. ex.: 90"
                            title="weight"
                            className="border-b-2 border-[150, 163, 171, .5] outline-none py-3 px-1 mb-5 disabled:opacity-55"
                        />
                        {errors.weight && <div className="text-red-600">{errors.weight.message}</div>}
                    </div>
                    <button type="submit" className="bg-[#227C9D] text-white text-sm border-0 rounded-xl w-full p-4 cursor-pointer mt-10 hover:opacity-80 transition-all ease-in-out disabled:opacity-55 disabled:cursor-default" disabled={showLevel !== null}>Calcular</button>
                </form>
            </div>
            <div className="flex flex-1 ml-0 md:ml-10 md:mt-0">
                {!showLevel &&
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {levels.map((item, key) =>  (
                        <GridItem item={item} key={key}/>
                    ))}
                    </div>
                }
                {showLevel &&
                    <div className="flex-1 flex">
                        <div className="flex absolute bg-[#227c9d] w-16 h-16 justify-center items-center cursor-pointer transition-all ease-in-out hover:opacity-60 ml-0 mt-0 rounded-xl md:-ml-9 md:mt-36 md:rounded-full" onClick={handleBackButton} title="voltar"> 
                            <img src={'/images/leftarrow.png'} alt="voltar" className="w-6"/>
                        </div>
                        <GridItem item={showLevel}/>
                    </div>
                }
            </div>
		</div>
    )
}
export default ImcCalculator;