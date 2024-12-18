import { getBlogPosts, getCategories } from "./blog/utils";
import { projects } from "./constants/project";

export const baseUrl = "https://jonathantrevino.com";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let allProjects = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.title}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  let categories = getCategories().map((category) => ({
    url: `${baseUrl}/blog/${category}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  console.log(categories);

  return [
    { url: `${baseUrl}` },
    { url: `${baseUrl}/blog` },
    ...categories,
    ...blogs,
    ...allProjects,
  ];
}
