import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";

const availableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feria', 'Quinta-feira', 'Sexta-feira', 'Sábado']

export function New() {
    const [ weekDays, setWeekDays] = useState<number[]>([])

    function handleToggleWeekDay(weekDayIndex: number){
        if(weekDays.includes(weekDayIndex)){
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
        }else{
            setWeekDays(prevState => [ ...prevState, weekDayIndex ])
        }
    }

    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView showsVerticalScrollIndicator={false}>

                <BackButton />

                <Text className="mt-6 text-white font-extrabold text-3xl">
                    Criar Hábito
                </Text>

                <Text className="mt-6 text-white font-semibold text-base">
                    Qual o seu comprometimento?
                </Text>

                <TextInput
                    className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600 "
                />

                <Text className="font-semibold mt-4 mb-3 text-white text-base">
                    Qual a recorrencia 
                </Text>

                {
                    availableWeekDays.map((weekDay, index) => (
                        <CheckBox
                            key={weekDay}
                            title={weekDay}
                            checked={ weekDays.includes(index)}
                            onPress={() => handleToggleWeekDay(index)}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}