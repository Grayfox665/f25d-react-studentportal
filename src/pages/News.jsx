import NewsPost from "../components/NewsPost";
import newsData from "../data/news";

export default function News() {
  return (
    <div className="container">
      <h2>This is the news page</h2>
      <p>add news/blog stuff here.</p>
      <div className="container">
        <div>
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
    </div>
  );
}
