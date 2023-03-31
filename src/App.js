
import './App.css';
import UserCard from './components/UserCard/UserCard';

const users = [
  {

    nome: 'Kelvin Costa',
    instagram: '@costa',
    seguidores: 140,
    seguindo: 270
  },
  {
    nome: 'Charles Santos',
    instagram: '@charles.santos',
    seguidores: 302,
    seguindo: 419
  },
  {

    nome: 'Anna Bia',
    instagram: '@anab',
    seguidores: 842,
    seguindo: 150
  },
  {
    nome: 'Mario Hisashi',
    instagram: '@hisashi',
    seguidores: 28,
    seguindo: 17
  }
]

function App() {



  return (


    <div className="conteiner">

      {users.map((user) => {
        <UserCard
          nome={user.name}
          instagram={user.name}
          seguidores={user.seguidores}
          seguindo={user.seguindo}
        />
      })}


    </div>
  )



}

export default App;
