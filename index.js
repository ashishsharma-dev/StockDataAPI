const express = require("express")
const PORT = process.env.PORT || 5000

const app = express()

app.get('/stock-data', (req, res)=>{
    const getData = async () => {
        const response = await fetch("https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY", {
            "headers": {
              "accept": "*/*",
              "accept-language": "en-US,en;q=0.9",
              "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "cookie": "_gid=GA1.2.543014539.1671684342; _ga=GA1.1.1858443736.1671597805; RT=\"z=1&dm=nseindia.com&si=5a187690-056a-4475-81bb-127c8ff988a3&ss=lbylou0l&sl=3&tt=3of&obo=2&rl=1&ld=ukzc&r=39zkkpvh&ul=ukzc&hd=ukze\"; nsit=qXjbLrJLgFoxfAnmthfvvusY; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTY3MTcwMTkxMiwiZXhwIjoxNjcxNzA1NTEyfQ.4KdHxHQfR1YG9580bCyrBLjuN8q2pT0vSg9UyxX7zLs; AKA_A2=A; _ga_PJSKY6CFJH=GS1.1.1671701914.3.0.1671701914.60.0.0; ak_bmsc=23D73BDB77D357C027E8C862F0BC96BA~000000000000000000000000000000~YAAQBY0sMbQNpPOEAQAA1+EyORKHqui58zmpEEIvlPdyATxwGAopl+q/cyGMLHcopuE+JEqEJNIpJjJnAcugMXF+881Ucc7HyVyMSggti41b8BlNs+FiiH4Wc3S9mNH5b3G69bqUiFysMrVpteqtKBDNO8XLMLU7QsxSjp7oxfr/IG0pl06mQYAQH4esGAgcE158nn7kIGPYPl3Olt75UzyQg6y4P23POuEHcM7q+WE1iKmWtPX+L/7qfIseiT0kHlOJdlagOJwHmXC0mXOyXxtX6rMjkgWF40AcBLLhqU9nXBBfFgOvmFUuyPh53Fm9wSt8HPA4e4K++YKO9djRfO07l/6rz0oYR2kIV1kDExpoWjFgbx0KGLd9sDdCbQrH8wTV1Ux2u95xJ9R0g0TXolU+uw9IHC2KAqwsMy4vA4sf/nc/S9mXSNDfJ/859nOY7FOto+WghzXpROi9GPBKnVJwfmYhrGf5W1OReMKg/g==; bm_sv=F8AC13B52E7E93DCC66155CE877DDC45~YAAQBY0sMT0QpPOEAQAATfYyORIHKSvIKZP4rLwGu6Djuk5QDiwOUsQfOED/BlVlGYId0Tdesk9ymZwjdzeSzOTc32U+l+ua1dodHs84xs2L9YTt49tONJvp8/QyBMbFZ9D2huhwVT87LcZzinEdjJRaVB5ya71V5a/XlGtLuWK3rTOu29A1BIxPbYOrjOKHGSTOSkxvDauJ3VT81RwJvmiU3nPBvdbVMO8XAFa1RIdO8ltE+Wrz6COve8GCv2UqT60=~1",
              "Referer": "https://www.nseindia.com/option-chain",
              "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
          });
        const data = await (await response.json())
        res.status(201).json(data)
    }

    getData()
})

app.listen(PORT, err=>{
    if(err){
        console.log(err)
    }
    console.log(`The Express Server is up and running on port: http://localhost:${PORT}`)
})