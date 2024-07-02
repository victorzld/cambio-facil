import { MoveHorizontal } from 'lucide-react'
import imageCoins from '../public/assets/imageCoins.png'
import { useState } from 'react'

export function App() {

  const [amount, setAmount] = useState('')
  const [coinFrom, setCoinFrom] = useState('USD')
  const [coinTo, setCointTo] = useState('BRL')
  const [result, setResult] = useState('')


  async function convertCurrency() {
    const host = 'api.frankfurter.app';
    fetch(
      `https://${host}/latest?amount=${amount}&from=${coinFrom}&to=${coinTo}`
    )
      .then(resp => resp.json())
      .then((data) => setResult(data.rates[coinTo].toFixed(2)));

    if (amount === '') {
      alert('Digite um valor no campo de conversão')
    }
  }

  return (
    <main className='max-w-[1216px] mx-auto'>
      <div className="text-slate-50 h-screen grid grid-cols-2 bg-zinc-900">
        <div className="flex flex-col items-center justify-center bg-zinc-900">

          <div className='flex flex-col items-start -ml-20 gap-4 mb-5'>
            <div>
              <h1 className='text-4xl font-bold tracking-wider'>Esteja Sempre</h1>
              <h1 className='text-4xl font-bold tracking-wider'>Atualizado!</h1>
            </div>
            <h2 className='font-light text-slate-300'>Grátis, online e rápido.</h2>
          </div>

          <div className='flex flex-col gap-5 items-center border w-[370px] rounded-lg py-10'>
            <h1 className='font-semibold text-2xl'>Faça a sua conversão</h1>

            <form className='flex flex-col gap-2 w-[300px] mt-5'>
              <label htmlFor="enterValue">Digite o valor</label>
              <input
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                autoComplete='off'
                type="text"
                id='enterValue'
                className='bg-transparent border border-white rounded-lg outline-none py-1 px-2'
              />
            </form>

            <form className='flex items-center justify-center gap-7'>

              <div className='flex flex-col gap-1'>
                <label htmlFor="fromCoin" className='text-slate-50'>De</label>
                <select
                  onChange={(e) => setCoinFrom(e.target.value)}
                  value={coinFrom}
                  id='fromCoin'
                  className='border rounded-md px-4 py-2 bg-zinc-900 text-sm'
                >
                  <option value="USD" selected>Dolar</option>
                  <option value="BRL">Real</option>
                  <option value="EUR">Euro</option>
                </select>
              </div>

              <div className='mt-7'>
                <MoveHorizontal />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="toCoin">Para</label>
                <select
                  value={coinTo}
                  onChange={(e) => setCointTo(e.target.value)}
                  id='toCoin'
                  className='border rounded-md px-4 py-2 bg-zinc-900 text-sm'
                >
                  <option value="USD">Dolar</option>
                  <option value="BRL" selected>Real</option>
                  <option value="EUR">Euro</option>
                </select>
              </div>
            </form>

            <button
              onClick={() => convertCurrency()}
              className='mt-5 py-4 px-10 bg-purple-700 rounded-lg text-lg
            hover:scale-105 duration-200 hover:tracking-wide'
            >
              Obter valor convertido
            </button>

            {result.length > 0 && (
              <span
                className='mt-5 text-sm font-semibold tracking-wider text-slate-300 hover:text-slate-200 duration-200'
              >
                O valor convertido é {result}
              </span>
            )}
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