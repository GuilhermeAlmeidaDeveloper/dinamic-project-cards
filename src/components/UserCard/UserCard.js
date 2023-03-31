import './styles.css'
import Avatar from '../Avatar'
import AnnaImage from '../../assets/anna-bia.png'
import CharlesImage from '../Avatar'
import KelvinImage from '../Avatar'
import MarioImage from '../Avatar'

function UserCard({ nome, instagram, seguidores, seguindo }) {


    return (

        <div className="user-card">

            <div className="user-data-names">

                <div className="user-name"> {nome} </div>
                <div className="user-instagram"> {instagram} </div>
            </div>
            <div className="user-data-numbers">
                <div className="user-seguidores"> {seguidores} </div>
                <div className="user-seguindo"> {seguindo} </div>
            </div>
        </div>
    )

}

export default UserCard