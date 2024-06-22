import Cuervo from "./components/Cuervo";
import Fondo from "./components/Fondo";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <>

      <div className="fixed flex justify-center sm:justify-start items-center h-screen w-full flex-col -space-y-40">

        <Cuervo />
        <Logo />

      </div>

      <div className="bottom-11 flex justify-center items-center w-full flex-col tex text-3xl sm:text-7xl font-bold text-indigo-100 text-stroke-black fixed">
        <p className="mt-5">San Lorenzo Campeón</p>
        <p className="">Libertadores 2024</p>
      </div>


      <Fondo />
    </>

  );
}
