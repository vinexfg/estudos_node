import Parser from "rss-parser"





const main = async ()=>{
    const url = "https://github.com/"
    const response = await fetch(url)
    console.log(await response.text());
    
}

main()