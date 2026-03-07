
async function loadNews(){

const url="https://api.rss2json.com/v1/api.json?rss_url=https://economictimes.indiatimes.com/rssfeedsdefault.cms"

const res=await fetch(url)

const data=await res.json()

const news=document.getElementById("news")

news.innerHTML=""

data.items.slice(0,10).forEach(item=>{

const li=document.createElement("li")

li.innerHTML=`<a href="${item.link}" target="_blank">${item.title}</a>`

news.appendChild(li)

})

}

loadNews()
