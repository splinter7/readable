import { create } from 'apisauce'

const api = create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Authorization': 'stewartsmall'
    }
})

export default api