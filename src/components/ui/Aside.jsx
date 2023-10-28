import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Aside = () => {

  const pathname = usePathname();

  return (
    <>
      <aside className='md:w-1/4 border-r-8 border-gray-300 rounded-md overflow-hidden border-double m-0'>
        <nav className=''>
          <div className="shadow-sm py-3 px-2 w-full flex gap-3">
            <input className="border py-1 px-2 border-gray-300 rounded-md text-gray-400 w-3/4" type="text" name="buscar" placeholder="Buscar" />
            <div className='flex gap-3'>
              <Image className='w-6 h-7' src={'/img/down.png'} width={100} height={100} alt='down' />
              <Image className='w-6 h-7' src={'/img/up.png'} width={100} height={100} alt='up' />
            </div>
          </div>

          <div className='flex gap-3 items-center mt-2'>
            <Image className='w-6 h-4' src={'/img/right.png'} width={100} height={100} alt='right' />
            <Link
              className={pathname === '/' ? 'text-lg block text-lime-700 font-black hover:text-slate-700 underline underline-offset-4' : 'font-bold text-lg block'}
              href="/">Servicio al Cliente</Link>
          </div>
          <div className='flex gap-3 items-center mt-2'>
            <Image className='w-6 h-4' src={'/img/right.png'} width={100} height={100} alt='right' />
            <Link
              className={pathname === '/mibitacoras' ? 'text-lg block text-lime-700 font-black hover:text-slate-700 underline underline-offset-4' : 'font-bold text-lg block'}
              href="/mibitacoras">Bitacoras</Link>
          </div>

          {/* {
            userAuth &&
            <div className='flex gap-3 items-center mt-2'>
              <Image className='w-6 h-4' src={'/img/right.png'} width={100} height={100} alt='right' />
              <Link
                className={pathname === '/solicitud' ? 'text-lg block text-indigo-500 font-bold' : 'font-bold text-gray-500 text-lg block'}
                href="/solicitud">Solicitudes</Link>
            </div>
          } */}

        </nav>
      </aside>
    </>

  )
}

export default Aside