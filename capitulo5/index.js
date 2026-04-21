import Parser from "rss-parser"

const parser = new Parser()

const main = async () => {

    const url = "https://www.reddit.com/.rss"

    const { title, items } = await parser.parseURL(url)

    console.log(title)

    const result = items.map(({ title, link }) => {
        { title, link }
    })

    console.table(result)

}

main()