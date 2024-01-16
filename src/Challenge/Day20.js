import { useState, useEffect } from "react";

export default function Day20() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <div className="container p-4 mx-auto">
        <table className="w-full border border-collapse border-gray-300 table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">ID</th>
              <th className="p-2">Title</th>
              <th className="p-2">Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border border-gray-300">
                <td className="p-2">{post.id}</td>
                <td className="p-2">{post.title}</td>
                <td className="p-2">{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 text-center">
          <button
            className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
            onClick={() => setPage((prevPage) => prevPage + 1)}
          >
            Next Items
          </button>
        </div>
      </div>
    </>
  );
}
