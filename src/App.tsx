import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Daily } from './pages/Daily'
import { Monthly } from './pages/Monthly'
import { Weekly } from './pages/Weekly'
import './styles/global.css'
import perfilImg from './assets/image-jeremy.png'
import { NavLink } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='w-screen h-screen bg-[#0F1424] text-white flex justify-center items-center max-sm:h-auto max-sm:py-12'>
        <div className='grid grid-flow-row-dense grid-cols-4 grid-rows-2 gap-8 max-sm:flex max-sm:flex-col max-sm:h-full'>
          <div className='row-span-2 bg-[#1C1F4A] rounded-lg w-44 max-sm:w-80'>
            <div className='bg-[#5847EB] rounded-lg p-6 h-2/3 max-sm:flex max-sm:items-center max-sm:gap-3 max-sm:justify-center'>
              <img src={perfilImg} alt="Perfil" className='h-[3.7rem] border-2 rounded-full mb-5 max-sm:h-[3rem] max-sm:mb-0' />
              <div>
                <p className='text-[.7rem] font-light max-sm:text-[.6rem]'>Report for</p>
                <h1 className='break-words text-2xl font-light max-sm:text-xl'>Jeremy Robson</h1>
              </div>

            </div>
            <div className='flex flex-col px-5 pt-4 gap-3 text-[.76rem] max-sm:flex-row p-4 justify-between'>
              <NavLink to='/' className={({ isActive }) => 
                isActive ? "text-white transition-colors duration-300" : "text-[#6F76C8] transition-colors duration-300 hover:text-white"
              }>Daily</NavLink>
              <NavLink to='/weekly' className={({ isActive }) => 
                isActive ? "text-white transition-colors duration-300" : "text-[#6F76C8] transition-colors duration-300 hover:text-white"
              }>Weekly</NavLink>
              <NavLink to='/monthly' className={({ isActive }) => 
                isActive ? "text-white transition-colors duration-300" : "text-[#6F76C8] transition-colors duration-300 hover:text-white"
              }>Monthly</NavLink>

            </div>
          </div>

          <Routes>
            <Route path='/' element={ <Daily /> } />
            <Route path='/weekly' element={ <Weekly /> } />
            <Route path='/monthly' element={ <Monthly /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )

}

export default App
