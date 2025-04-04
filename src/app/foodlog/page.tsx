import DateSelector from "@/app/components/DateSelector";
import MacroOverView from "@/app/components/MacroOverView";
import FoodCard from "@/app/components/FoodCard";

export default function FoodLog() {
    return (
        <div className="flex flex-col space-y-4 w-full">
            <DateSelector />
            <MacroOverView />

            {/* Timeline */}
            <div className="flex flex-col space-y-4 w-full">
                {[
                    {time: "8:00",
                        card: {
                            imageSrc: "https://img.icons8.com/emoji/48/waffle-emoji.png",
                            name: "Homemade Plain Waffles",
                            calories: 82,
                            protein: 2,
                            fat: 4,
                            carbs: 9,
                            quantity: "1 oz"
                        }
                    },
                    {time: "8:10",
                        card: {
                            imageSrc: "https://img.icons8.com/emoji/48/strawberry-emoji.png",
                            name: "Strawberries, Fresh",
                            calories: 6,
                            protein: 0,
                            fat: 0,
                            carbs: 1,
                            quantity: '1 large - 1 3/8"'
                        }
                    },
                    {time: "10:00",
                        card: {
                            imageSrc: "https://img.icons8.com/?size=100&id=25082&format=png&color=000000",
                            name: "Egg Fried",
                            calories: 196,
                            protein: 14,
                            fat: 15,
                            carbs: 1,
                            quantity: "2.5 medium"
                        }
                    },
                    {time: "10:10",
                        card: {
                            imageSrc: "https://img.icons8.com/emoji/48/cucumber-emoji.png",
                            name: "Cucumber, Raw aaaaaaaaaaaaaaaaaa",
                            calories: 28,
                            protein: 2,
                            fat: 0,
                            carbs: 6,
                            quantity: '1 large - 8 1/4"'
                        }
                    },
                ].map(({time, card}) => (
                    <div key={time} className="flex flex-row items-start w-full space-x-2">
                        <div className="w-[60px] relative flex justify-center">
                            <span className="text-xs text-gray-500 bg-white pt-1">{time}</span>
                            <div className="absolute top-5 bottom-0  bg-gray-300 w-[2%] h-[300%]"/>
                        </div>
                        <div className="flex-4 min-w-0">

                            <div className="min-w-0">
                                <FoodCard {...card} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
        ;
}