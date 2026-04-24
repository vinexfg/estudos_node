import Parser from "rss-parser"


const parser = Parser()


const main = async ()=>{
    const url = "https://github.com/"
    const response = await fetch(url)
    console.log(await response.text());
    
}

main()