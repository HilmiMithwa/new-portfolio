
import "./components/MenuButtonNavbar";
import MenuButtonNavbar from './components/MenuButtonNavbar';
import fotoHilmi from "./images/foto-hilmi.png";
import TypeWriter from 'typewriter-effect';

function App() {
  return(
    <>
      <div className="font-roboto bg-black text-white min-h-screen">

        <nav id="navbar" className='pb-35 p-5'>
          <MenuButtonNavbar/>
        </nav>
          
        <main id='mainBody' className='flex  max-[430px]:flex-col min-[428px]:items-center'>
          <h1 className="min-[428px]:text-[60px] font-medium min-[428px]:text-center">Hey There,</h1>
          <h1 className="min-[428px]:text-[60px] font-medium min-[428px]:text-center pb-10">I'm Hilmi</h1>
          <img src={fotoHilmi} className="min-[428px]:w-62.5"/>

          <div className="min-[428px]:pt-8.75">
            <h3 className="min-[428px]:text-[35px] min-[428px]:text-center">
              <TypeWriter
                options={{
                  strings: ['UI/UX Designer', 'Currently Deepening on Machine Learning', 'Frontend Engineer'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
                />
            </h3>
          </div>
          
        </main>

      </div>
    </>
  )
}

export default App;