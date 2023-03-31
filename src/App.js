
import './App.css';
import Cards from './components/Cards';
import Anna from './assets/anna-bia.png'
import Charles from './assets/charles-santos.png'
import Kelvin from './assets/kelvin-costa.png'
import Mario from './assets/mario-hisashi.png'

const users = [
  {
    avatar: Kelvin,
    nome: 'Kelvin Costa',
    instagram: '@costa',
    seguidores: '140 seguidores',
    seguindo: '270 seguindo'
  },
  {
    avatar: Charles,
    nome: 'Charles Santos',
    instagram: '@charles.santos',
    seguidores: '302 seguidores',
    seguindo: '419 seguindo'
  },
  {
    avatar: Anna,
    nome: 'Anna Bia',
    instagram: '@anab',
    seguidores: '842 seguidores',
    seguindo: '150 seguindo'
  },
  {
    avatar: Mario,
    nome: 'Mario Hisashi',
    instagram: '@hisashi',
    seguidores: '28 seguidores',
    seguindo: '17 seguindo'
  }
]

function App() {
  return (

    <div className="conteiner">

      {users.map((user) => (
        <Cards
          avatar={user.avatar}
          nome={user.nome}
          insta={user.instagram}
          seguidores={user.seguidores}
          seguindo={user.seguindo}
        />))}



    </div>
  )

}

export default App;
