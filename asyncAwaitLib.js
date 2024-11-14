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
export const asyncPostFetch = async (url, data) => {
    const resolve = await fetch(url, {
        method: 'POST',
        headers:{
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify(data)
    })
    const response = await resolve.json()
    return response;
}
export const asyncPutFetch = async (url, data) => {
    const resolve = await fetch(url, {
        method: 'PUT',
        headers: {
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify(data)
    })
    const response = await resolve.json();
    return response;
}
export const asyncDeleteFetch = async (url) => {
    const resolve = await fetch(url, {
        method: 'DELETE'
    })
    const response = await resolve.json();
    return response;
}