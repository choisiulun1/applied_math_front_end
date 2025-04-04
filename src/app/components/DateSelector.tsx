'use client'
import { useState } from 'react'

const days = [
    { day: 'M', date: 19 },
    { day: 'T', date: 20 },
    { day: 'W', date: 21 },
    { day: 'T', date: 22 },
    { day: 'F', date: 23 },
    { day: 'S', date: 24 },
    { day: 'S', date: 25 },
]

export default function DateSelector() {
    const [selected, setSelected] = useState(22)
    const today = 25

    return (
        <div className="flex space-x-3">
            {days.map(({ day, date }) => {
                const isSelected = selected === date
                const isToday = date === today

                return (
                    <button
                        key={date}
                        onClick={() => setSelected(date)}
                        className={`flex flex-col items-center justify-center w-12 h-16 rounded-full border-2 transition-all
              ${isSelected ? 'bg-gray-200 text-black' : 'bg-white text-gray-800'}
              ${isSelected ? 'border-blue-500' : 'border-blue-300'}
              hover:shadow-md`}
                    >
                        <span className="text-sm text-[0.8em]">{day}</span>
                        <span className="font-semibold text-[0.8em]">{date}</span>
                        {isToday && <span className="pt-1
                         w-1.5 h-1.5 rounded-full bg-black" />}
                    </button>
                )
            })}
        </div>
    )
}
