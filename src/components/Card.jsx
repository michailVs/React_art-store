import React from 'react'

const Card = (props) => {
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
              </div>
          </div>
      )}
  </div>
  )
}

export default Card