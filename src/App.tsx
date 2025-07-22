import { useState } from 'react'
import CityForm from './components/CityForm';

function App() {
  const [refresh, setRefresh] = useState(false);
  const handleCityGet = () => setRefresh(!refresh);

  return (
    <main className="bg-[#282828] h-screen w-screen">
      <div className='justify-center items-center flex flex-col'>
        <h1 className="text-4xl font-bold mb-8 text-white">
          City Weather
        </h1>

        <div className="bg-[#282828] p-8 rounded-xl shadow-lg flex flex-col gap-10 items-center">
          <CityForm onStudentAdded={handleCityGet} />
        </div>
      </div>
      <footer className='items-buttom text-white'>
        <p>
          By Andres Felipe Chavarro Plazas
        </p>
        <a href="">Github repository</a>
        <a href="Javadoc"></a>
      </footer>
    </main>
  );
}

export default App
