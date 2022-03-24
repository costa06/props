import './style.css';
import Profil from './components/profil/profil';



function App() {

  const profils = [
    {
      firstName: "Tarek",
      lastName: "Touati",
      profession: "Web developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "profil.jpg"
    },
    {
      firstName: "Chiheb",
      lastName: "Alex",
      profession: "Web developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "avatar.png"
    },
    {
      firstName: "Damien",
      lastName: "Max",
      profession: "Web developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      image: "avatar.png"
    },
    {
      firstName: "Bruno",
      lastName: "Max",
      profession: "Web developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      image: "avatar.png"
    },
    {
      firstName: "Alex",
      lastName: "Max",
      profession: "Web developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      image: "avatar.png"
    },
    {
      firstName: "Maxim",
      lastName: "Fox",
      profession: "Web developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      image: "avatar.png"
    }
  ]

  return (
    <>
      <header>

      </header>
      <main>
        <section className='profil'>
            <div className='container'>
                <div className='content'>
                    <Profil profils={profils} />
                </div>
            </div>
        </section>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
