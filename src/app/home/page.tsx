// pages/index.js
"use client"
import { useEffect, useState } from 'react';
import Pagination from '../component/Pagination';


export default function Home({ articles, totalPages, currentPage }:any) {
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article:any) => (
          <li key={article._id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} currentPage={parseInt(currentPage, 10)} />
    </div>
  );
}

export async function getServerSideProps({ query }:any) {
  const page = query.page || 1;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?page=${page}&limit=10`);
  const data = await res.json();

  return {
    props: {
      articles: data.articles,
      totalPages: data.totalPages,
      currentPage: page,
    },
  };
}
