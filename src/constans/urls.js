const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'
const posts = '/posts'
const comments = '/comments'

const  urls = {
    users:{
        base:users,
        byId:(id)=> `${user}/${id}`
    },

    posts:{
        base: posts,
        byId:(id) => `${posts}/ ${id}`
    },
    comments:{
        base:comments,
        byId:(id) => `${comments}/${id}`
    },
}

export {
    urls,
    baseURL
}
