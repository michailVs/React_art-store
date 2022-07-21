import axios from "axios";

export default class TodoService {
    static async getAll() {
        const response = await axios.get('https://62cd28a1a43bf78008529b98.mockapi.io/api/admin/artStore')
        return response
    }
    static async getById(id) {
        const response = await axios.get('https://62cd28a1a43bf78008529b98.mockapi.io/api/admin/artStore' + id)
        return response
    }
    // static async removeById(id) {
    //     const response = await axios.delete('https://62cd28a1a43bf78008529b98.mockapi.io/api/admin/artStore/' + id)
    //     return response
    // }
    static async postCard(data) {
        const response = await axios.post('https://62cd28a1a43bf78008529b98.mockapi.io/api/admin/artStore', data)
        return response
    }
}