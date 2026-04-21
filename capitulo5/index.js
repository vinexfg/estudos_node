const main = async () => {
    const url = "https://www.netflix.com/br/"
    const response = await fetch(url)
    console.log(await response.text());
}
main()