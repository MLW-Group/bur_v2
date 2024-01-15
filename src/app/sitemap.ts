export default async function sitemap() {
  const staticRoutes = [
    "/",
    "/ekb",
    "/aramil",
    "/bakal",
    "/beryozovsky",
    "/chebarkul",
    "/kamensk",
    "/katav-ivanovsk",
    "/minyar",
    "/sim",
    "/miass",
    "/polevskoy",
    "/satka",
    "/sysertskiy-region",
    "/verkhnyaya-pyshma",
    "/yuryuzan",
    "/zlatoust",
    "/kusa",
    "/karabash",
    "/ust-katav",
  ];

  const staticPages = staticRoutes.map((route: string) => ({
    url: `${process.env.DOMAIN}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return staticPages;
}
