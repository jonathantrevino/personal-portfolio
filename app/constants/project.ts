export type ProjectCardType = {
  title: React.ReactNode,
  description: React.ReactNode,
  image_url: string[],
  skills: string[],
  slug: string,
  github?: string,
  live?: string,
  users?: number,
}

export type ProjectType = {
  title: string,
  description: string,
  image_url: string[],
  skills: string[],
  slug: string,
  github?: string,
  live?: string,
  users?: number,
  overview: string,
  features: string[],
  obstacles: string[],
  results: string,
}

export const project_card: ProjectCardType[] = [
  {

    title: 'webportfolios.dev',
    description: 'Directory of Developer Portfolios',
    image_url: ['/webportfolios.webp'],
    skills: ['Next.js', 'Tailwind', 'Typescript', 'Firebase', 'AWS'],
    slug: 'webportfolios.dev',
    live: 'https://www.webportfolios.dev',
    users: 100,
  }
]

export const skills: { image_url: string, title: string }[] = [
  { image_url: "/Typescript.webp", title: "TypeScript" },
  { image_url: "/Javascript.webp", title: "JavaScript" },
  { image_url: "/React.webp", title: "React" },
  { image_url: "/Next.webp", title: "Next" },
  { image_url: "/TailwindCSS.webp", title: "Tailwind" },
  { image_url: "/Firebase.webp", title: "Firebase" },
  { image_url: "/Express.webp", title: "Express" },
  { image_url: "/Nodejs.webp", title: "Node" },
  { image_url: "/Aws.webp", title: "AWS" },
  { image_url: "/Mysql.webp", title: "MySql" },
  { image_url: "/Java.webp", title: "Java" },
  { image_url: "/C.webp", title: "C" },
  { image_url: "/Python.webp", title: "Python" },
  { image_url: "/Github.webp", title: "Github" },
];


export const projects: ProjectType[] = [
  {
    title: 'webportfolios.dev',
    description: 'Directory of Developer Portfolios',
    image_url: ['/webportfolios.webp', '/webportfolios_browse.webp', '/webportfolios_portfolio.webp'],
    skills: ['Next.js', 'Tailwind', 'Typescript', 'Firebase', 'AWS'],
    slug: 'webportfolios.dev',
    live: 'https://www.webportfolios.dev',
    users: 100,
    overview: 'webportfolios.dev is a platform that enables users to help others find inspiration, improving their own design, and how to showcase their skills effectively from browsing a directory of developer portfolios uploaded by other developers.',
    features: [
      'Directory of developer portfolios sorted by tech stacks, and professional titles',
      'Server-side rendering (SSR) implemented for faster load times and better SEO by fetching data directly from the server',
      'AWS Lambda functions manage the portfolio upload process by using Puppeteer to incrementally screenshot the users portfolio, providing progress updates to the frontend while handling uploads asynchronously',
      'Automatic SEO optimization for fields such as title, description, and Open Graph Image',

    ],
    obstacles: [
      'Initial issues properly configuring puppeteer on Lambda function, solved by researching further into chromium.',
      'Using next/mdx package for blog, the docs were outdated and had to implement my own solutions to properly render and manage MDX content'
    ],
    results: 'Successfully onboarded 400+ users who submitted 180+ portfolios. Positive feedback from users, citing ease of use and valuable insights for portfolio improvement. Established as a go-to resource for all developers seeking inspiration.',
  }
]
