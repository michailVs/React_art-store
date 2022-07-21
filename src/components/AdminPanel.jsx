import React, { useState, useEffect } from 'react'
import MyInput from './UI/MyInput/MyInput'
import MyButton from './UI/button/MyButton'
import TodoService from '../API/TodoService'
import { useFetching } from '../hooks/useFetching'
import CardAdmin from './CardAdmin'

const AdminPanel = () => {
    const [todo, setTodo] = useState([])

    const [fetchTodo] = useFetching(async () => {
        const response = await TodoService.getAll()
        setTodo([...todo, ...response.data])
    })
    useEffect(() => {
        fetchTodo()
    }, [])
    const [adminCard, setAdminCard] = useState({title: '', descr: '', width: '', height: '', price: '', img: ''})
    function addNewCard(e) {
        e.preventDefault()
        TodoService.postCard(adminCard)
        setAdminCard({title: '', descr: '', width: '', height: '', price: '', img: ''})
        console.log(adminCard)
    }
    return (
        <div className="admin">
            <div className='admin__container'>
                <div className="admin__panel">
                    <form>
                        <MyInput 
                            type="text"
                            value={adminCard.img}
                            onChange={e => setAdminCard({...adminCard, img: e.target.value})}
                            placeholder="Введите ссылку на картинку"
                            className="admin__title"
                        />
                        <MyInput 
                            type="text"
                            value={adminCard.title}
                            onChange={e => setAdminCard({...adminCard, title: e.target.value})}
                            placeholder="Введите название"
                            className="admin__title"
                        />
                        <MyInput 
                            type="text"
                            value={adminCard.descr}
                            onChange={e => setAdminCard({...adminCard, descr: e.target.value})}
                            placeholder="Введите описание"
                            className="admin__descr"
                        />
                        <MyInput 
                            type="number"
                            value={adminCard.width}
                            onChange={e => setAdminCard({...adminCard, width: e.target.value})}
                            placeholder="Введите ширину"
                            className="admin__width"
                        />
                        <MyInput 
                            type="number"
                            value={adminCard.height}
                            onChange={e => setAdminCard({...adminCard, height: e.target.value})}
                            placeholder="Введите высоту"
                            className="admin__height"
                        />
                        <MyInput 
                            type="number"
                            value={adminCard.price}
                            onChange={e => setAdminCard({...adminCard, price: e.target.value})}
                            placeholder="Введите цену"
                            className="admin__price"
                        />
                    </form>
                    <MyButton style={{marginBottom: 150}} onClick={addNewCard}>Отправить в базу данных</MyButton>
                    <CardAdmin card={todo}/>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel