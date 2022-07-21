import React from 'react'
import TodoService from '../API/TodoService'
import MyButton from './UI/button/MyButton'

const Card = (props) => {
  async function removeCardById(id) {
    await fetch(`https://62cd28a1a43bf78008529b98.mockapi.io/api/admin/artStore/${id}`, {method: 'DELETE'})
  }
  return (
    <div className='card-col'>
        {props.card.map(item => 
            <div key={item.id} className='card'>
                <img src={item.img} alt={item.title} className="card__img"/>
                <div className="card__text">
                    <h2 className="card__title">Название: {item.title}</h2>
                    <p className="card__descr">Описание: {item.descr}</p>
                    <p className="card__size">Размер: {item.width} x {item.height}</p>
                    <p className="card__price">Цена: {item.price}</p>
                    <MyButton style={{marginLeft: 20, marginBottom: 20}} onClick={() => removeCardById(item.id)}>Удалить</MyButton>
                </div>
            </div>
        )}
    </div>
  )
}

export default Card