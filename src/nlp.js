const NUTRITIONIX_APP_ID="f607fde1"
const NUTRITIONIX_APP_KEY="b4e87b03459e606053290d41a6f3553c"

const query = '2 eggs and a banana';
console.log(process.env.NUTRITIONIX_APP_ID);
fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-app-id': NUTRITIONIX_APP_ID,
        'x-app-key': NUTRITIONIX_APP_KEY,
    },
    body: JSON.stringify({query}),
})
    .then(async (res) => {
        const data = await res.json();
        console.log('Nutritionix response:', data);
    })
    .catch((err) => {
        console.error('Error:', err);
    });
