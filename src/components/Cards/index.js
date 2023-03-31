import './styles.css'

function Cards({ nome, insta, seguidores, seguindo, avatar }) {
    return (
        <div className='card'>
            <img src={avatar} />
            <div className='name-data'>
                <div className='name'>{nome}</div>
                <div className='insta'>{insta}</div>
            </div>
            <div className='insta-data'>
                <div className='seguidores'>{seguidores}</div>
                <div className='seguindo'>{seguindo}</div>
            </div>
        </div>
    )
}

export default Cards