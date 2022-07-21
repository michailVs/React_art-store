import React, { useState, useEffect } from 'react'
import TodoService from '../API/TodoService'
import { useFetching } from '../hooks/useFetching'
import Card from './Card'

const CardList = () => {
    const [todo, setTodo] = useState([])

    const [fetchTodo] = useFetching(async () => {
        const response = await TodoService.getAll()
        setTodo([...todo, ...response.data])
    })
    useEffect(() => {
        fetchTodo()
    }, [])
    return (
        <div>
            <Card card={todo}/>
        </div>
    )
}

export default CardList