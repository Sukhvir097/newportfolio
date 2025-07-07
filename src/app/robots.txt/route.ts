export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://www.sukhvirportfolio.info/sitemap.xml`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}

