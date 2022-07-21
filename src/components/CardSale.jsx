import React from 'react'

const CardSale = ({setVisible}) => {
    return (
        <div className="pop">
            <a className="pop__cross" onClick={() => setVisible(false)}>
                <img src="https://cdn-icons.flaticon.com/png/512/2976/premium/2976286.png?token=exp=1658419261~hmac=a21d867394c0ceab487fe1893a268b6b" alt="Close cross" className="pop__close"/>
            </a>
            <h2 className="social__title">По заказу обращатся в соц. сети:</h2>
            <a href="#" className="social__tg">
                <img src="https://cdn-icons-png.flaticon.com/512/216/216545.png" alt="Telegram link" className="social__tg-img"/>
            </a>
            <a href="#" className="social__vk">
                <img src="https://cdn-icons-png.flaticon.com/512/216/216551.png" alt="Vkontakte link" className="social__vk-img"/>
            </a>
            <a href="#" className="social__inst">
                <img src="https://cdn-icons-png.flaticon.com/512/216/216537.png" alt="Instagram link" className="social__inst-img"/>
            </a>
        </div>
    )
}

export default CardSale