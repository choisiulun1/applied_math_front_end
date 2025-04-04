export async function GET() {
    return new Response(JSON.stringify({
        appId: process.env.NUTRITIONIX_APP_ID,
        appKey: process.env.NUTRITIONIX_APP_KEY,
    }))
}