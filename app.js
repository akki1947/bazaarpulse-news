async function loadNews(){

try{

const res = await fetch("/api/news")

const xmlText = await res.text()

const parser = new DOMParser()

const xml = parser.parseFromString(xmlText,"text/xml")

const items = xml.querySelectorAll("item")

const news = document.getElementById("news")

news.innerHTML=""

items.forEach((item,i)=>{

if(i>10) return

const title=item.querySelector("title").textContent
const link=item.querySelector("link").textContent

const li=document.createElement("li")

li.innerHTML=`<a href="${link}" target="_blank">${title}</a>`

news.appendChild(li)

})

}catch(e){

console.log("News error",e)

}

}

loadNews()
