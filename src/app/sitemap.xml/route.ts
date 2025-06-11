import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://univerzalkalkulacka.sk";
  const staticPages = [
    "",
    "danova-kalkulacka",
    "uverova-kalkulacka",
    "investicna-kalkulacka",
    "poistna-kalkulacka",
    "o-nas",
  ];
  const clanky = [
    "ako-sa-vypocita-cista-a-hruba-mzda",
    "ako-funguje-poistenie-na-slovensku",
    "ako-na-spravny-vyber-uveru",
    "ako-zacat-investovat",
    "ako-usetrit-na-daniach",
  ];

  const urls = [
    ...staticPages.map(page =>
      `<url><loc>${baseUrl}/${page}</loc></url>`
    ),
    ...clanky.map(slug =>
      `<url><loc>${baseUrl}/blog/${slug}</loc></url>`
    ),
  ].join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new NextResponse(body, {
    headers: { "Content-Type": "application/xml" },
  });
}
