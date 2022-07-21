import React, { useState } from 'react'
import CardSale from '../../CardSale'
import MyButton from '../button/MyButton'
import MyModal from '../MyModal/MyModal'

const Navbar = () => {
    const [modal, setModal] = useState(false)
    return (
        <div className='navbar'>
            <div className="navbar__contain">
                <div className="col">
                    <a href='/' className="logo" style={{textDecoration: 'none', color: '#000', textTransform: 'uppercase', fontSize: 22, fontWeight: 'bold'}}>LOGO</a>
                    <MyButton style={{marginTop: 15, marginLeft: 30, marginBottom: 30}} onClick={() => setModal(true)}>Купить</MyButton>
                </div>
            </div>
            <MyModal visible={modal} setVisible={setModal}>
                <CardSale setVisible={setModal}/>
            </MyModal>
        </div>
    )
}

export default Navbar