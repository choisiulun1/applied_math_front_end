import { NextRequest } from 'next/server'


export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const expression = searchParams.get('expression')
    const max_results = searchParams.get('max_results') || '5'

    if (!expression) {
        return new Response(JSON.stringify({ error: 'Missing expression' }), { status: 400 })
    }

    try {
        const res = await fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${expression}`, {
            headers: {
                'x-app-id': process.env.NUTRITIONIX_APP_ID!,
                'x-app-key': process.env.NUTRITIONIX_APP_KEY!,
            },
        })

        console.log(process.env.NUTRITIONIX_APP_ID)
        const data = await res.json()
        const common = data.common?.map((f: any) => f.food_name) || []
        const branded = data.branded?.map((f: any) => f.food_name) || []
        const suggestions = [...common.slice(0,2), ...branded.slice(0,2)]
        return new Response(JSON.stringify({ suggestions }), { status: 200 })
    } catch (err) {
        console.error(err)
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 })
    }
}
