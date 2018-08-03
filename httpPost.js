const http = require("http")
const postData = JSON.stringify({foo: "bar"})

const option = {
    hostname: "mockbin.com",
    port: 80,
    path: "/request?foo=bar&foo=baz",
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(postData)
    }
}

const req = http.request(option, (res)=> {
    res.on("data", (chunk) => {
        console.log(`BODY: ${chunk}`)
    })
    res.on("end", () => {
        console.log("No more data in response.")
    })
})

req.on("error", (e) => {
    console.error(`Problem with request: ${e.message}`)
})

req.write(postData)
req.end()