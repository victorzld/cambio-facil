import { MoveLeft, MoveRight } from 'lucide-react'
import imageCoins from '../public/assets/imageCoins.png'

export function App() {
  return (
    <main>
      <div className="text-slate-50 h-screen grid grid-cols-2">
        <div className="bg-zinc-900">
          <div>
            <h1>Currency Converter</h1>
            <form>
              <label htmlFor="enterValue">Enter Amount</label>
              <input type="number" id='enterValue' />
            </form>

            <form>
              <select name="" id="">
                <option value="">USD</option>
                <option value="BRL"></option>
                <option value="EUR">USD</option>
              </select>

              <div>
                <MoveRight />
                <MoveLeft />
              </div>

              <select name="" id="">
                <option value="">USD</option>
                <option value="BRL"></option>
                <option value="EUR">USD</option>
              </select>
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