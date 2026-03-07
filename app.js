async function loadTicker(){

try{

const url="https://query1.finance.yahoo.com/v7/finance/quote?symbols=%5ENSEI,%5ENSEBANK"

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

loadTicker()
loadNews()

setInterval(loadTicker,60000)
