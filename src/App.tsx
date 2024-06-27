import { MoveHorizontal } from 'lucide-react'
import imageCoins from '../public/assets/imageCoins.png'

export function App() {
  return (
    <main>
      <div className="text-slate-50 h-screen grid grid-cols-2">
        <div className="flex items-center justify-center bg-zinc-900">
          <div className='flex flex-col gap-5 items-center border w-[350px] rounded-lg'>
            <h1 className='font-semibold text-2xl py-6'>Currency Converter</h1>

            <form className='flex flex-col gap-2 w-[300px]'>
              <label htmlFor="enterValue">Enter Amount</label>
              <input
                type="text"
                id='enterValue'
                className='bg-transparent border border-white rounded-lg outline-none py-1 px-2'
              />
            </form>

            <form className='flex items-center justify-center gap-8'>

              <div className='flex flex-col gap-1'>
                <label htmlFor="fromCoin" className='text-slate-50'>From</label>
                <select id='fromCoin' className='px-3 py-1 bg-zinc-900 text-sm'>
                  <option value="USD"> USD</option>
                  <option value="BRL">BRL</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>

              <div className='mt-7'>
                <MoveHorizontal />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="toCoin">To</label>
                <select id='toCoin' className='px-3 py-1 bg-zinc-900 text-sm'>
                  <option value="USD">USD</option>
                  <option value="BRL">BRL</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </form>

            <span>
              1 USD = 5.71 BRL
            </span>

            <button>
              Get Exchange Rate
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center bg-blue-700">
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