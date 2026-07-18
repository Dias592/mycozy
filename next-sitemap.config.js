/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://mycozyhome.com.br',
  generateRobotsTxt: true,
  trailingSlash: true,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/static/', '/_next/image/'],
      },
    ],
  },
};
