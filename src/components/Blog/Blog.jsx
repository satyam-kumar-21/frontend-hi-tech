import React from "react";

const posts = [
  {
    id: 1,
    title: 'AI in Marketing: The Future of Business',
    href: '#',
    description:
      'Satyam Kumar, CEO, discusses the role of AI in modern marketing strategies and how businesses can take advantage of it to drive success.',
    date: 'Jun 20, 2024',
    datetime: '2024-06-20',
    category: { title: 'AI', href: '#' },
    author: {
      name: 'Satyam Kumar',
      role: 'CEO',
      href: '#',
    },
  },
  {
    id: 2,
    title: 'The Rise of Blockchain in Indian Startups',
    href: '#',
    description:
      'Sanjeev Pal, CTO, explains how blockchain technology is disrupting the startup ecosystem in India and paving the way for decentralized solutions.',
    date: 'Jun 25, 2024',
    datetime: '2024-06-25',
    category: { title: 'Blockchain', href: '#' },
    author: {
      name: 'Sanjeev Pal',
      role: 'CTO',
      href: '#',
    },
  },
  {
    id: 3,
    title: 'AI-driven Business Strategies by Pankaj Kumar',
    href: '#',
    description:
      'Pankaj Kumar, Co-Founder, shares actionable AI-driven strategies that are helping businesses scale in the current market.',
    date: 'Jul 1, 2024',
    datetime: '2024-07-01',
    category: { title: 'AI', href: '#' },
    author: {
      name: 'Pankaj Kumar',
      role: 'Co-Founder',
      href: '#',
    },
  },
  {
    id: 4,
    title: 'How IoT is Revolutionizing Indian Manufacturing',
    href: '#',
    description:
      'An insightful vlog by Ankur Mehta, IoT Expert, on how the Internet of Things is transforming the manufacturing industry in India.',
    date: 'Jul 5, 2024',
    datetime: '2024-07-05',
    category: { title: 'IoT', href: '#' },
    author: {
      name: 'Ankur Mehta',
      role: 'IoT Expert',
      href: '#',
    },
  },
  {
    id: 5,
    title: 'Leveraging Cloud Computing for Small Businesses',
    href: '#',
    description:
      'Satyam Kumar talks about how small businesses in India can leverage cloud computing solutions to enhance efficiency and scalability.',
    date: 'Jul 10, 2024',
    datetime: '2024-07-10',
    category: { title: 'Cloud Computing', href: '#' },
    author: {
      name: 'Satyam Kumar',
      role: 'CEO',
      href: '#',
    },
  },
  {
    id: 6,
    title: 'Blockchain in Fintech: Revolutionizing Digital Payments',
    href: '#',
    description:
      'Pankaj Kumar explains how blockchain is transforming the fintech landscape and providing secure, transparent solutions for digital payments.',
    date: 'Jul 15, 2024',
    datetime: '2024-07-15',
    category: { title: 'Blockchain', href: '#' },
    author: {
      name: 'Pankaj Kumar',
      role: 'Co-Founder',
      href: '#',
    },
  },
  {
    id: 7,
    title: 'AI and Automation in the Indian E-commerce Industry',
    href: '#',
    description:
      'A detailed vlog by Rajeev Sharma on how AI and automation are shaping the future of e-commerce in India and enhancing customer experiences.',
    date: 'Jul 20, 2024',
    datetime: '2024-07-20',
    category: { title: 'E-commerce AI', href: '#' },
    author: {
      name: 'Rajeev Sharma',
      role: 'AI Consultant',
      href: '#',
    },
  },
  {
    id: 8,
    title: 'How Cloud Computing is Empowering Indian Startups',
    href: '#',
    description:
      'An insightful vlog by Anjali Singh on how cloud computing is enabling Indian startups to scale and innovate more efficiently.',
    date: 'Jul 25, 2024',
    datetime: '2024-07-25',
    category: { title: 'Cloud Computing', href: '#' },
    author: {
      name: 'Anjali Singh',
      role: 'Cloud Expert',
      href: '#',
    },
  },
  {
    id: 9,
    title: 'The Future of Artificial Intelligence in India',
    href: '#',
    description:
      'Satyam Kumar discusses the immense potential of AI in India and how companies can adapt to upcoming trends in AI to drive growth.',
    date: 'Aug 1, 2024',
    datetime: '2024-08-01',
    category: { title: 'AI', href: '#' },
    author: {
      name: 'Satyam Kumar',
      role: 'CEO',
      href: '#',
    },
  },
  {
    id: 10,
    title: 'Fintech in India: Leveraging AI and Blockchain for Growth',
    href: '#',
    description:
      'Pankaj Kumar dives into how AI and blockchain are playing pivotal roles in transforming the Fintech industry in India, enabling faster and more secure financial services.',
    date: 'Aug 5, 2024',
    datetime: '2024-08-05',
    category: { title: 'Fintech', href: '#' },
    author: {
      name: 'Pankaj Kumar',
      role: 'Co-Founder',
      href: '#',
    },
  },
];

export default function Blog() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Stay updated with expert insights from technology leaders in India across multiple fields like AI, Blockchain, IoT, and more.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
