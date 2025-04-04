export async function POST(request: Request) {
  const { query } = await request.json();

  const res = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-app-id': process.env.NUTRITIONIX_APP_ID!,
      'x-app-key': process.env.NUTRITIONIX_APP_KEY!,
    },
    body: JSON.stringify({ query }),
  });
  console.log(res)
  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'Failed to get nutrition data' }), {
      status: res.status,
    });
  }

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
