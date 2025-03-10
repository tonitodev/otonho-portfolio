import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex flex-column px-[40px] justify-between gap-[40px] bg-white shadow-md py-4">
      <div className="flex flex-row justify-between gap-x-[80px]">
        <NavLink to='/'>
          <p className="w-auto min-w-[140px] text-lg text-slate-600 font-semibold">Antonio Vargas</p>
        </NavLink>
        <p className="hidden lg:block w-auto text-lg text-teal-700 text-left">Product Designer</p>
      </div>

      <div className="flex flex-row gap-x-[32px] items-center justify-end text-center">
        <NavLink to='/work'>
          <p className="text-lg text-slate-600">Work</p>
        </NavLink>

        <NavLink to='/hobies'>
          <p className="text-lg text-slate-600">Hobies</p>
        </NavLink>

        <NavLink to='about'>
          <p className="text-lg text-slate-600">About</p>
        </NavLink>
  
        <NavLink to='resume'>
          <p className="text-lg text-slate-600">Resume</p>
        </NavLink>
        
      </div>
    </header>
  
  )
}

export default Header;

{/* <header className="w-full flex flex-column justify-between bg-white shadow-md py-4">
<div className="mx-[40px] flex flex-row gap-x-[80px] items-center text-center">
  <p className="min-w-[200px] text-lg text-slate-600 font-semibold">Antonio Vargas <span className="text-teal-700">(o Toño)</span> </p>
  <p className="min-w-[200px] text-lg text-slate-600 text-left">Product Designer</p>
</div>
<div className="mx-[40px] flex flex-row gap-x-[32px] items-center justify-end text-center">
  <p className="text-lg text-slate-600">Work</p>
  <p className="text-lg text-slate-600">Hobies</p>
  <p className="text-lg text-slate-600">About</p>
  <p className="text-lg text-slate-600">Resume</p>
</div>
</header>  */}