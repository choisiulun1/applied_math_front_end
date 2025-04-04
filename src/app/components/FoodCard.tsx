const FoodCard = ({
                      imageSrc,
                      name,
                      calories,
                      protein,
                      fat,
                      carbs,
                      quantity,
                  }: {
    imageSrc: string;
    name: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    quantity: string;
}) => {
    return (
        <div className="flex items-center bg-white rounded-md shadow p-2 w-full">
            {/* Left: Image */}
            <img
                src={imageSrc}
                alt={name}
                className="w-8 h-8 object-contain shrink-0 flex-none"
            />

            {/* Middle: Info */}
            <div className="flex-1 min-w-0 mx-2 overflow-hidden">
                <p className="text-sm font-medium whitespace-nowrap truncate min-w-0">{name}</p>
                <p className="text-xs text-gray-500 min-w-0">
                    {calories}🔥 {protein}P {fat}F {carbs}C • {quantity}
                </p>
            </div>

            {/* Right: Button */}
            <button className="p-1 shrink-0">
                <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
                    />
                </svg>
            </button>
        </div>
    );
};
export default FoodCard;