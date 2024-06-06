// components/Pagination.js
import Link from 'next/link';

export default function Pagination({ totalPages, currentPage }:any) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link href={`/?page=${number}`}>
              <a className={number === currentPage ? 'active' : ''}>{number}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        ul {
          list-style: none;
          display: flex;
        }
        li {
          margin: 0 5px;
        }
        a {
          padding: 8px 16px;
          text-decoration: none;
          border: 1px solid #ccc;
          color: #333;
        }
        a.active {
          background-color: #0070f3;
          color: white;
        }
      `}</style>
    </nav>
  );
}
