import NewsPost from "../components/NewsPost";
import newsData from "../data/news";

export default function News() {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">News page</h2>
        <p className="text-muted">Latest News</p>
      </div>

      <div className="row">
        {newsData.map((news) => (
          <NewsPost
            key={news.id}
            title={news.title}
            course={news.course}
            category={news.category}
            date={news.date}
            content={news.content}
          />
        ))}
      </div>
    </div>
  );
}
