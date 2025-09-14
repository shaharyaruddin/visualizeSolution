"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PageWrapper from "@/components/PageWrappper";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/components/common";
import axios from "axios";

const Blogs = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [listOfBlogs, setListOfBlogs] = useState<any[]>([]);

  useGSAP(() => {
    // gsap.registerPlugin(ScrollTrigger); // ✅ Move here

    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    });

    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: index * 0.05,
      });
    });
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_FRONT_URL}blogs`
      );
      setListOfBlogs(response?.data?.AllBlogs);
    } catch (error) {
      console.log("error in fetching blogs", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <PageWrapper title="Blogs">
      <div className="min-h-screen px-4 md:px-12 py-24" ref={containerRef}>
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white headingFont">
          Recent Blogs
        </h1>

        {/* Top Blog */}
        {/* <Link href="blogs/mastering-react-in-2025">
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 mb-16 transition-all duration-300 hover:shadow-2xl">
            <Image
              src={blogs[0].image}
              alt={blogs[0].title}
              width={500}
              height={300}
              className="rounded-xl w-full md:w-[50%] object-cover"
            />
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 textFont">
                {blogs[0].date}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white headingFont">
                {blogs[0].title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-4 textFont">
                {blogs[0].excerpt}
              </p>
            </div>
          </div>
        </Link> */}

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listOfBlogs?.map((blog, index) => (
            <Link href={`/blogs/${blog?._id}`} key={blog.id}>
              <div
                className="bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 textFont">
                    {blog.date}
                  </p>
                  <h3 className="text-lg headingFont font-semibold text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 textFont">
                    {blog.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Blogs;
