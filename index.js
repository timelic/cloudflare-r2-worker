export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const key = decodeURIComponent(url.pathname.slice(1));
    
    console.log({url, key})

    switch (request.method) {
      case "GET":
        const object = await env.BUCKET.get(key);
        if (!object) {
            return new Response("Object Not Found", { status: 404 });
        }

        const headers = new Headers();
        headers.append('Content-Type', 'application/octet-stream');
        headers.append('Content-Disposition', `attachment; filename=${key}`);

        const response = new Response(object.body, { headers });
        return response;

      default:
        return new Response("Route Not Found.", { status: 404 });
    }
  }
}
