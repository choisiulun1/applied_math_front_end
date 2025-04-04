function NutritionLabel({ food }: { food: any }) {
    const dailyValues = {
        calories: 2000,
        totalFat: 78,
        saturatedFat: 20,
        cholesterol: 300,
        sodium: 2300,
        totalCarbohydrate: 275,
        dietaryFiber: 28,
        protein: 50,
        vitaminD: 20,
        calcium: 1300,
        iron: 18,
        potassium: 4700,
    };

    const calculateDV = (nutrient: number, dailyValue: number) => {
        return Math.round((nutrient / dailyValue) * 100);
    };

    return (
        <div className="w-full border-2 border-black bg-white p-4 font-sans">
            <h2 className="text-2xl font-bold border-b-8 border-black leading-none">Nutrition Facts</h2>

            <div className="flex justify-between text-xl font-bold my-1">
                <span>Calories</span>
                <span>{Math.round(food.nf_calories ?? food.full_nutrients.find(n => n.attr_id === 208)?.value || 0)}</span>
            </div>
            <hr className="border-t-4 border-black my-1" />

            <div className="text-right text-xs font-bold mb-1">% Daily Value*</div>

            <div className="flex justify-between text-sm my-1">
                <span><strong>Total Fat</strong> {food.nf_total_fat ?? food.full_nutrients.find(n => n.attr_id === 204)?.value || 0}g</span>
                <span>{calculateDV(food.nf_total_fat ?? food.full_nutrients.find(n => n.attr_id === 204)?.value || 0, dailyValues.totalFat)}%</span>
            </div>
            <hr className="my-1" />

            <div className="flex justify-between text-sm ml-4 my-1">
                <span>Saturated Fat {food.nf_saturated_fat ?? food.full_nutrients.find(n => n.attr_id === 606)?.value || 0}g</span>
                <span>{calculateDV(food.nf_saturated_fat ?? food.full_nutrients.find(n => n.attr_id === 606)?.value || 0, dailyValues.saturatedFat)}%</span>
            </div>
            <hr className="my-1" />

            <div className="flex justify-between text-sm ml-4 my-1">
                <span>Trans Fat 0g</span>
            </div>
            <hr className="my-1" />

            <div className="flex justify-between text-sm my-1">
                <span><strong>Cholesterol</strong> {food.nf_cholesterol ?? food.full_nutrients.find(n => n.attr_id === 601)?.value || 0}mg</span>
                <span>{calculateDV(food.nf_cholesterol ?? food.full_nutrients.find(n => n.attr_id === 601)?.value || 0, dailyValues.cholesterol)}%</span>
            </div>
            <hr className="my-1" />

            <div className="flex justify-between text-sm my-1">
                <span><strong>Sodium</strong> {food.nf_sodium ?? food.full_nutrients.find(n => n.attr_id === 307)?.value || 0}mg</span>
                <span>{calculateDV(food.nf_sodium ?? food.full_nutrients.find(n => n.attr_id === 307)?.value || 0, dailyValues.sodium)}%</span>
            </div>
            <hr className="my-1" />

            <div className="flex justify-between text-sm my-1">
                <span><strong>Total Carbohydrate</strong> {food.nf_total_carbohydrate ?? food.full_nutrients.find(n => n.attr_id === 205)?.value || 0}g</span>
                <span>{calculateDV(food.nf_total_carbohydrate ?? food.full_nutrients.find(n => n.attr_id === 205)?.value || 0, dailyValues.totalCarbohydrate)}%</span>
            </div>
            <hr className="my-1" />

            <div className="flex justify-between text-sm ml-4 my-1">
                <span>Dietary Fiber {food.nf_dietary_fiber ?? food.full_nutrients.find(n => n.attr_id === 291)?.value || 0}g</span>
                <span>{calculateDV(food.nf_dietary_fiber ?? food.full_nutrients.find(n => n.attr_id === 291)?.value || 0, dailyValues.dietaryFiber)}%</span>
            </div>
            <hr className="my-1" />

            <div className="flex justify-between text-sm ml-4 my-1">
                <span>Sugars {food.nf_sugars ?? food.full_nutrients.find(n => n.attr_id === 269)?.value || 0}g</span>
            </div>
            <hr className="my-1" />

            <div className="flex justify-between text-sm my-1">
                <span><strong>Protein</strong> {food.nf_protein ?? food.full_nutrients.find(n => n.attr_id === 203)?.value || 0}g</span>
                <span>{calculateDV(food.nf_protein ?? food.full_nutrients.find(n => n.attr_id === 203)?.value || 0, dailyValues.protein)}%</span>
            </div>
            <hr className="my-1" />

            <div className="flex justify-between text-sm my-1">
                <span><strong>Vitamin D</strong> {food.nf_vitamin_d ?? food.full_nutrients.find(n => n.attr_id === 324)?.value || 0}mcg</span>
                <span>{calculateDV(food.nf_vitamin_d ?? food.full_nutrients.find(n => n.attr_id === 324)?.value || 0, dailyValues.vitaminD)}%</span>
            </div>
            <hr className="my-1" />

            <div className="flex justify-between text-sm my-1">
                <span><strong>Calcium</strong> {food.nf_calcium ?? food.full_nutrients.find(n => n.attr_id === 301)?.value || 0}mg</span>
                <span>{calculateDV(food.nf_calcium ?? food.full_nutrients.find(n => n.attr_id === 301)?.value || 0, dailyValues.calcium)}%</span>
            </div>
            <hr className="my-1" />

            <div className="flex justify-between text-sm my-1">
                <span><strong>Iron</strong> {food.nf_iron ?? food.full_nutrients.find(n => n.attr_id === 303)?.value || 0}mg</span>
                <span>{calculateDV(food.nf_iron ?? food.full_nutrients.find(n => n.attr_id === 303)?.value || 0, dailyValues.iron)}%</span>
            </div>
            <hr className="my-1" />

            <div className="flex justify-between text-sm my-1">
                <span>Potassium {food.nf_potassium ?? food.full_nutrients.find(n => n.attr_id === 306)?.value || 0}mg</span>
                <span>{calculateDV(food.nf_potassium ?? food.full_nutrients.find(n => n.attr_id === 306)?.value || 0, dailyValues.potassium)}%</span>
            </div>
            <hr className="my-1" />

            <div className="flex justify-between text-sm my-1">
                <span><strong>Caffeine</strong> { food.full_nutrients.find(n => n.attr_id === 262)?.value || 0}mg</span>
            </div>
            <hr className="my-1" />

            <p className="text-xs border-t border-black pt-1 mt-2">
                * The % Daily Value (DV) tells you how much a nutrient in a serving of food
                contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
            </p>
        </div>
    );
}
export default NutritionLabel;