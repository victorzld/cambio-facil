import { MoveHorizontal } from 'lucide-react'
import imageCoins from '../public/assets/imageCoins.png'

export function App() {
  return (
    <main>
      <div className="text-slate-50 h-screen grid grid-cols-2 bg-zinc-900">
        <div className="flex items-center justify-center bg-zinc-900">

          <div className='flex flex-col gap-5 items-center border w-[350px] rounded-lg py-10'>
            <h1 className='font-semibold text-2xl'>Currency Converter</h1>

            <form className='flex flex-col gap-2 w-[300px] mt-5'>
              <label htmlFor="enterValue">Enter Amount</label>
              <input
                type="text"
                id='enterValue'
                className='bg-transparent border border-white rounded-lg outline-none py-1 px-2'
              />
            </form>

            <form className='flex items-center justify-center gap-7'>

              <div className='flex flex-col gap-1'>
                <label htmlFor="fromCoin" className='text-slate-50'>From</label>
                <select id='fromCoin' className='border rounded-md px-4 py-2 bg-zinc-900 text-sm'>
                  <option value="USD" selected>Dolar</option>
                  <option value="BRL">Real</option>
                  <option value="EUR">Euro</option>
                </select>
              </div>

              <div className='mt-7'>
                <MoveHorizontal />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="toCoin">To</label>
                <select id='toCoin' className='border rounded-md px-4 py-2 bg-zinc-900 text-sm'>
                  <option value="USD">Dolar</option>
                  <option value="BRL" selected>Real</option>
                  <option value="EUR">Euro</option>
                </select>
              </div>
            </form>

            <button className='mt-5 py-4 px-10 bg-purple-700 rounded-lg text-lg
            hover:scale-105 duration-200'
            >
              Get Exchange Rate
            </button>

            <span className='mt-5 text-sm font-semibold tracking-wider text-slate-300 hover:text-slate-200 duration-200'>
              1 USD = 5.71 BRL
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={imageCoins}
            width={700}
            height={700}
          />
        </div>
      </div>
    </main>
  )
}