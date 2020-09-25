const url = 'https://hq.techgp.cn/rjhy-gmg-quote/api/1/stock/hotSearchV2'

fetch(url)
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
    });

console.log(window)


// const data = await fetch(url).then((res) => res.json())
// console.log(data)