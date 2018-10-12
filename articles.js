let articleList = document.getElementById('articleList')



for (let index = 0; index < news.articles.length; index++){
  console.log(news.articles[index])
  let article = news.articles[index]

  let newsItem = `
<li>
<img class ="img" src= "${article.urlToImage}"/>
<h3>${article.title}</h3>
<p>${article.description}</p>
<p>${article.author}</p>
<p>${article.url}</p>
</li>
`

articleList.insertAdjacentHTML('beforeend',newsItem)

}
