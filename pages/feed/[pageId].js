import styles from '../../styles/Feed.module.css'

export const Feed = ({ pageNumber, articles }) => {
  console.log(pageNumber, articles)
  return (
    <div className='page-container'>
      <div className={styles.main}>
        {articles.map((article, index) => (
          <div key={index} className={styles.post}>
            <h1 onClick={() => (window.location.href = article.url)}>
              {article.title}
            </h1>
            <p>{article.description}</p>
            {!!article.urlToImage && <img src={article.urlToImage} />}
          </div>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.pageId

  if (!pageNumber || pageNumber < -1 || pageNumber > 5) {
    return {
      props: {
        pageNumber: 1,
        articles: [],
      },
    }
  }

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  )

  const data = await res.json()

  const { articles } = data

  return {
    props: {
      pageNumber: Number.parseInt(pageNumber),
      articles,
    },
  }
}

export default Feed
