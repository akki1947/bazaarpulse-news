
export default async function handler(req, res) {

try {

const url =
"https://economictimes.indiatimes.com/rssfeedsdefault.cms"

const r = await fetch(url)

const xml = await r.text()

res.setHeader("Access-Control-Allow-Origin", "*")
res.status(200).send(xml)

} catch (e) {

res.status(500).json({ error: "Feed failed" })

}

}
