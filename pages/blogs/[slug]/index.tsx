"use client";
import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PageWrapper from "@/components/PageWrappper";
import Image from "next/image";
import Link from "next/link";

// gsap.registerPlugin(ScrollTrigger);

type Blog = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content: string;
  author: string;
  authorImage: string;
  readTime: string;
};

const blogData: { [key: string]: Blog } = {
  "mastering-react-in-2025": {
    id: 1,
    title: "Mastering React in 2025",
    excerpt: "A complete guide to becoming a React expert this year.",
    image: "/assets/blogs/blog1.jpeg",
    date: "July 25, 2025",
    content: `
      <h2>Introduction to React in 2025</h2>
      <p>React continues to dominate the frontend development landscape in 2025...</p>
      <h2>Key Features to Master</h2>
      <p>Learn about concurrent rendering, suspense, and more...</p>
      <h3>Concurrent Rendering</h3>
      <p>This helps apps stay responsive under load...</p>
      <h2>Best Practices</h2>
      <p>Follow these best practices to write clean and efficient React code...</p>
    `,
    author: "John Doe",
    authorImage: "/assets/authors/john.jpg",
    readTime: "8 min read",
  },
};

const defaultBlog: Blog = {
  id: 0,
  title: "Blog Not Found",
  excerpt: "This blog post could not be found.",
  image: "/assets/blogs/default.jpg",
  date: new Date().toLocaleDateString(),
  content: "<p>Sorry, the blog post you are looking for does not exist.</p>",
  author: "Unknown",
  authorImage: "/assets/authors/default.jpg",
  readTime: "1 min read",
};

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [toc, setToc] = useState<{ text: string; id: string }[]>([]);

  const blog = typeof slug === "string" ? blogData[slug] || defaultBlog : defaultBlog;

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll("h2, h3");
      const newToc: { text: string; id: string }[] = [];

      headings.forEach((el) => {
        const id = el.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
        el.setAttribute("id", id);
        newToc.push({ text: el.textContent || "", id });
      });

      setToc(newToc);
    }
  }, [slug]);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: 0.5,
      },
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
    });

    gsap.from(authorRef.current, {
      scrollTrigger: {
        trigger: authorRef.current,
        start: "top 90%",
        end: "bottom 70%",
        scrub: 0.5,
      },
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power2.out",
    });
  }, [slug]);

  return (
    <PageWrapper title={blog.title}>
      <div className="bg-white text-black min-h-screen mt-28" ref={containerRef}>
        {/* Hero */}
        <div className="relative h-[60vh] min-h-[400px]" ref={heroRef}>
          <Image src={blog.image} alt={blog.title} fill className="object-cover opacity-80" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 md:px-12 pb-8 text-white">
            <div className="max-w-4xl mx-auto">
              <Link href="/blogs" className="text-sm underline hover:text-gray-300">
                ← Back to Blogs
              </Link>
              <h1 className="text-4xl md:text-5xl font-semibold mt-4 headingFont">{blog.title}</h1>
              <div className="flex items-center gap-3 mt-3 text-sm text-gray-300">
                <span className="textFont">{blog.date}</span> <span>•</span>
                <span className="textFont">{blog.readTime}</span> <span>•</span>
                <span className="textFont">By {blog.author}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 flex flex-col lg:flex-row gap-10" ref={contentRef}>
          {/* Table of Contents */}
          {toc.length > 0 && (
            <aside className="hidden lg:block w-64 sticky top-24">
              <div className="border-l-4 border-black pl-4 text-sm space-y-2">
                <h3 className="text-lg font-semibold mb-3">Table of Contents</h3>
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block hover:underline text-gray-700 textFont"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </aside>
          )}

          {/* Blog Content */}
          <article className="prose prose-lg dark:prose-invert prose-headings:text-black prose-p:text-gray-800 max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </article>
        </div>

        {/* Author Section */}
        <div
          className="max-w-4xl mx-auto px-4 md:px-8 py-12 border-t border-gray-300"
          ref={authorRef}
        >
          <div className="flex items-center gap-6">
            <Image
              src={blog.authorImage}
              alt={blog.author}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">{blog.author}</h3>
              <p className="text-gray-600">
                Passionate about technology and sharing knowledge with the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Slug;
