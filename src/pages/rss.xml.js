import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: `${SITE.name} — Blog`,
    description: 'Praktische kennis over webdesign, SEO, AI-vindbaarheid en online marketing.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}`,
    })),
    customData: '<language>nl-NL</language>',
  });
}
