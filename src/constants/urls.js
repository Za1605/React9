const  baseUrlJson = 'https://jsonplaceholder.typicode.com';

const posts = '/posts'

const urls = {
    posts: {
        base : posts,
        byId: (id) => `${posts}/ ${id}`
    }
}

export {
    baseUrlJson,
    urls
}