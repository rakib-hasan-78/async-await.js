export const asyncGetFetch = async (url) => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`ERROR: Data Did Not Get Form Server....!`)
        }
        const result = await response.json()
        return result;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}