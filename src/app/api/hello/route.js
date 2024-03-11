// src/app/api/hello/route.js

// Gestione delle richieste GET
export async function GET(request) {
  try {
    return new Response(JSON.stringify({ message: 'Hello from Next.js!' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Errore nella gestione della richiesta GET' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
