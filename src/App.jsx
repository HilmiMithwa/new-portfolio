
import "./components/MenuButtonNavbar";
import MenuButtonNavbar from './components/MenuButtonNavbar';
import fotoHilmi from "./images/foto-hilmi.png";
import TypeWriter from 'typewriter-effect';
import reactImage from './images/mdi_react.png'
import figmaImage from './images/solar_figma-bold.png'
import pythonImage from './images/akar-icons_python-fill.png'
import javascriptImage from './images/ri_javascript-fill.png'
import tailwindImage from './images/lineicons_tailwindcss.png'
import nextImage from './images/next-js.png'

function App() {
  return(
    <>
      <div className="font-roboto bg-black text-white min-h-screen">

        <nav id="navbar" className='pb-35 p-5'>
          <MenuButtonNavbar/>
        </nav>
          
        <main id='mainBody' className='flex  min-[428px]:flex-col min-[428px]:items-center min-[428px]:text-center'>
          <h1 className="min-[428px]:text-[60px] font-medium min-[428px]:text-center">Hey There,</h1>
          <h1 className="min-[428px]:text-[60px] font-medium min-[428px]:text-center pb-10">I'm Hilmi</h1>
          <img src={fotoHilmi} className="min-[428px]:w-62.5"/>

          <div className="min-[428px]:pt-8.75 flex flex-col">
            <h3 className="min-[428px]:text-[35px]">
              <TypeWriter
                options={{
                  strings: ['UI/UX Designer', 'Deepening on ML', 'Frontend Engineer'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
                />
            </h3>
            <p className="min-[428px]:text-center min-[428px]:pt-8.75 min-[428px]:p-16">
              Iam an undergraduate Software Engineer student at Universitas Pendidikan Indonesia, passionate about building innovative solutions through technology. Currently, i’m deepening my skills on Machine Learning, exploring how intelligent system can solve real world problems.
            </p>
            <a className="text-[30px]  border-[#0288D1] border-2 min-[428px]:w-65.75 items-center min-[428px]:items-center mx-auto rounded-[10px] p-3">My LinkedIn</a>
          </div>

          <div className="min-[428px]:pt-8.75">
            <h1 className="font-semibold text-[60px]">Skills</h1>
            <div className="flex flex-wrap justify-center gap-8.75 items-center ">

              <div className="border-white border-3 flex flex-col items-center w-89.75 h-47 justify-center rounded-[15px]">
                <img src={reactImage}></img>
                <p className="text-[25px]">React</p>
              </div>

              <div className="border-white border-3 flex flex-col items-center w-89.75 h-47 justify-center rounded-[15px]">
                <img src={figmaImage}></img>
                <p className="text-[25px]">Figma</p>
              </div>

              <div className="border-white border-3 flex flex-col items-center w-89.75 h-47 justify-center rounded-[15px]">
                <img src={pythonImage}></img>
                <p className="text-[25px]">Python</p>
              </div>

              <div className="border-white border-3 flex flex-col items-center w-89.75 h-47 justify-center rounded-[15px]">
                <img src={javascriptImage}></img>
                <p className="text-[25px]">Javascript</p>
              </div>

              <div className="border-white border-3 flex flex-col items-center w-89.75 h-47 justify-center rounded-[15px]">
                <img src={tailwindImage}></img>
                <p className="text-[25px]">Tailwind CSS</p>
              </div>

              <div className="border-white border-3 flex flex-col items-center w-89.75 h-47 justify-center rounded-[15px]">
                <img src={nextImage}></img>
                <p className="text-[25px]">Next.Js</p>
              </div>
              
            </div>
          </div>

          
        </main>

      </div>
    </>
  )
}

export default App;