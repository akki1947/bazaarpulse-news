async function loadTicker(){

try{

const url="https://api.allorigins.win/raw?url=https://query1.finance.yahoo.com/v7/finance/quote?symbols=%5ENSEI,%5ENSEBANK"

const res=await fetch(url)

const data=await res.json()

const results=data.quoteResponse.result

const nifty=results.find(x=>x.symbol==="^NSEI")
const bank=results.find(x=>x.symbol==="^NSEBANK")

document.getElementById("nifty").innerText=
nifty.regularMarketPrice+" ("+nifty.regularMarketChangePercent.toFixed(2)+"%)"

document.getElementById("banknifty").innerText=
bank.regularMarketPrice+" ("+bank.regularMarketChangePercent.toFixed(2)+"%)"

}catch(e){

console.log("Ticker error",e)

}

}



async function loadNews(){

try{

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

}catch(e){

console.log("News error",e)

}

}



async function loadMovers(){

try{

const url="https://api.allorigins.win/raw?url=https://query1.finance.yahoo.com/v1/finance/screener/predefined/saved?scrIds=day_gainers&count=5"

const res=await fetch(url)

const data=await res.json()

const rows=data.finance.result[0].quotes

const gainers=document.getElementById("gainers")

gainers.innerHTML=""

rows.forEach(s=>{

const li=document.createElement("li")

li.innerText=s.symbol+"  "+s.regularMarketChangePercent.toFixed(2)+"%"

gainers.appendChild(li)

})

}catch(e){

console.log("Movers error",e)

}

}



async function loadLosers(){

try{

const url="https://api.allorigins.win/raw?url=https://query1.finance.yahoo.com/v1/finance/screener/predefined/saved?scrIds=day_losers&count=5"

const res=await fetch(url)

const data=await res.json()

const rows=data.finance.result[0].quotes

const losers=document.getElementById("losers")

losers.innerHTML=""

rows.forEach(s=>{

const li=document.createElement("li")

li.innerText=s.symbol+"  "+s.regularMarketChangePercent.toFixed(2)+"%"

losers.appendChild(li)

})

}catch(e){

console.log("Losers error",e)

}

}



loadTicker()
loadNews()
loadMovers()
loadLosers()

setInterval(loadTicker,60000)
