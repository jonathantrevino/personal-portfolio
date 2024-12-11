import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { on } from 'events'

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(file_path: fs.PathOrFileDescriptor) {
  let raw = fs.readFileSync(file_path, 'utf8')
  return matter(raw)
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { data: metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return { metadata, slug, content }
  })
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'blogs'))
}

export function getCategories() {
  const posts = getBlogPosts(); // Fetch all blog posts

  // Create an object to store category counts
  const categoryCount: { [key: string]: number } = {};

  // Iterate through each post and count the categories
  posts.forEach((post) => {
    if (Array.isArray(post.metadata.category)) {
      post.metadata.category.forEach((category) => {
        categoryCount[category] = (categoryCount[category] || 0) + 1;
      });
    }
  });

  // Convert the category count object into an array of [category, count] pairs
  const categoryEntries = Object.entries(categoryCount);

  // Sort the categories by their count in descending order
  categoryEntries.sort((a, b) => b[1] - a[1]);

  // Get the top 6 categories (or fewer if there are not enough categories)
  const topCategories = categoryEntries.slice(0, 6).map(entry => entry[0]);

  return topCategories;
}



export function formatDate(date: string, includeRelative = false) {

  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }

  let targetDate = new Date(date)
  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDay() - targetDate.getDay();


  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  }
  else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo  ago`
  }
  else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
