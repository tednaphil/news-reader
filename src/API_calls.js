const KEY = process.env.REACT_APP_NEWS_API_KEY

const getNews = async () => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${KEY}`)
        if (!response.ok) {
            const status = response.status
            throw new Error(`We couldn't get the news! ${status}`)
        }
        return await response.json();
    } catch (error) {
        console.log('API catch block', error)
        throw error
    }
}
export { getNews }