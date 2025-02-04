/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MoveHorizontal, MoveVertical } from 'lucide-react'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { SliderImages } from './components/slider'

export function App() {

  const [amount, setAmount] = useState('1')
  const [coinFrom, setCoinFrom] = useState('USD')
  const [coinTo, setCointTo] = useState('BRL')
  const [result, setResult] = useState('')

  async function handleConvertCurrency(event: any) {
    event.preventDefault()

    const host = 'api.frankfurter.app';
    fetch(
      `https://${host}/latest?amount=${amount}&from=${coinFrom}&to=${coinTo}`
    )
      .then(resp => resp.json())
      .then((data) => setResult(data.rates[coinTo].toFixed(2)?.replace(/[.]/, ',')));

    if (amount === '') {
      Swal.fire(
        {
          text: 'Campo vazio. Digite um valor para converter.',
          icon: 'error',
          title: 'ERRO!!'
        }
      )
    } else {
      if (coinFrom === coinTo) {
        Swal.fire(
          {
            text: 'Não é possível converter a mesma moeda. Selecione outro tipo e tente novamente!',
            icon: 'error',
            title: 'Algo deu errado.'
          }
        )
      }
    }
  }

  useEffect(() => {
    const host = 'api.frankfurter.app';
    fetch(
      `https://${host}/latest?amount=${amount}&from=${coinFrom}&to=${coinTo}`
    )
      .then(resp => resp.json())
      .then((data) => setResult(data.rates[coinTo].toFixed(2)?.replace(/[.]/, ',')));
  }, [])

  return (
    <main className='mx-auto bg-slate-300'>
      <div className="text-slate-50 h-screen grid grid-cols-2 max-md:grid-cols-1 xl:px-10">

        <form onSubmit={handleConvertCurrency}
          className="flex flex-col items-center justify-center max-sm:scale-90"
        >

          <div className="flex flex-col items-center justify-center max-md:scale-90 max-sm:-mt-10">

            <div className='flex flex-col items-start max-sm:ml-5 xl:-ml-52 gap-4 mb-5 '>
              <div>
                <h1 className='text-4xl font-bold tracking-wider text-zinc-950'>Esteja Sempre</h1>
                <h1 className='text-4xl font-bold tracking-wider max-sm:ml-5 text-zinc-950'>Atualizado!</h1>
              </div>
              <h2 className='font-light text-zinc-950 max-sm:ml-9 max-sm:-mt-4'>Grátis, online e rápido.</h2>
            </div>

            <div className='flex flex-col gap-10 items-center border border-zinc-950 w-[480px] rounded-lg py-10 
            max-md:w-[400px] max-sm:py-20'
            >
              <h1 className='font-semibold text-2xl max-sm:text-3xl  text-zinc-950'>Faça a sua conversão</h1>

              <div className='flex flex-col gap-2 w-[480px] px-10 mt-5 max-md:w-[400px]'>
                <label
                  htmlFor="enterValue"
                  className='max-sm:text-xl  text-zinc-950'
                >
                  Digite o valor
                </label>
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                  autoComplete='off'
                  type="number"
                  id='enterValue'
                  className='bg-transparent border border-zinc-950  text-zinc-950 rounded-lg outline-none py-1 px-2
                    max-sm:py-2'
                />
              </div>

              <div className='flex items-center justify-center gap-7 max-md:flex-col max-md:gap-0'>

                <div className='flex flex-col gap-1 max-md:w-[300px]'>
                  <label
                    htmlFor="fromCoin"
                    className=' text-zinc-950 max-sm:text-lg'
                  >
                    De
                  </label>
                  <select
                    onChange={(e) => setCoinFrom(e.target.value)}
                    value={coinFrom}
                    id='fromCoin'
                    className='border rounded-md px-4 py-2 bg-slate-300 border-zinc-950 text-zinc-950 text-sm
                        max-sm:px-5 max-sm:py-3 max-sm:text-lg'
                  >
                    <option value="USD" selected>Dólar Americano</option>
                    <option value="BRL">Real</option>
                    <option value="EUR">Euro</option>
                    <option value="GBP" selected>Libra Esterlina</option>
                    <option value="JPY">Iene</option>
                    <option value="AUD">Dólar Australiano</option>
                    <option value="CHF" selected>Franco Suíço</option>
                    <option value="CAD">Dólar Canadense</option>
                    <option value="CNY">Yuan Renminbi</option>
                    <option value="TRY">Lira Turca</option>
                  </select>

                </div>

                <div className='mt-7'>
                  <div className='max-md:hidden text-zinc-950'>
                    <MoveHorizontal />
                  </div>

                  <div className='md:hidden text-zinc-950'>
                    <MoveVertical />
                  </div>
                </div>

                <div className='flex flex-col gap-1 max-md:w-[300px]'>
                  <label
                    htmlFor="toCoin"
                    className='max-sm:text-lg text-zinc-950'
                  >
                    Para
                  </label>
                  <select
                    value={coinTo}
                    onChange={(e) => setCointTo(e.target.value)}
                    id='toCoin'
                    className='border border-zinc-950 text-zinc-950 rounded-md px-4 py-2 bg-slate-300 text-sm
                       max-sm:px-5 max-sm:py-3 max-sm:text-lg'
                  >
                    <option value="USD">Dólar Americano</option>
                    <option value="BRL" >Real</option>
                    <option value="EUR">Euro</option>
                    <option value="GBP" selected>Libra Esterlina</option>
                    <option value="JPY">Iene</option>
                    <option value="AUD">Dólar Australiano</option>
                    <option value="CHF" selected>Franco Suíço</option>
                    <option value="CAD">Dólar Canadense</option>
                    <option value="CNY">Yuan Renminbi</option>
                    <option value="TRY">Lira Turca</option>
                  </select>
                </div>
              </div>

              <button

                className='mt-5 py-2 px-3 bg-zinc-700 rounded-lg text
                  hover:scale-105 duration-200'
              >
                Converter
              </button>

              {result.length > 0 && coinTo != coinFrom && amount != '' && (
                <div className='flex gap-1 items-center font-bold -mt-4 text-lg text-zinc-950'
                >
                  {coinTo === 'USD' && (
                    <span>
                      {coinFrom} {amount} = {coinTo} {result}
                    </span>
                  )}
                  {coinTo === 'BRL' && (
                    <span>
                      {coinFrom} {amount} = {coinTo} {result}
                    </span>
                  )}
                  {coinTo === 'EUR' && (
                    <span>
                      {coinFrom} {amount} = {coinTo} {result}
                    </span>
                  )}
                  {coinTo === 'GBP' && (
                    <span>
                      {coinFrom} {amount} = {coinTo} {result}
                    </span>
                  )}
                  {coinTo === 'JPY' && (
                    <span>
                      {coinFrom} {amount} = {coinTo} {result}
                    </span>
                  )}
                  {coinTo === 'AUD' && (
                    <span>
                      {coinFrom} {amount} = {coinTo} {result}
                    </span>
                  )}
                  {coinTo === 'CHF' && (
                    <span>
                      {coinFrom} {amount} = {coinTo} {result}
                    </span>
                  )}
                  {coinTo === 'CAD' && (
                    <span>
                      {coinFrom} {amount} = {coinTo} {result}
                    </span>
                  )}
                  {coinTo === 'CNY' && (
                    <span>
                      {coinFrom} {amount} = {coinTo} {result}
                    </span>
                  )}
                  {coinTo === 'ARS' && (
                    <span>
                      {coinFrom} {amount} = {coinTo} {result}
                    </span>
                  )}
                  {coinTo === 'TRY' && (
                    <span>
                      {coinFrom} {amount} = {coinTo} {result}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </form>

        <div className='my-auto max-md:hidden'>
          <SliderImages />
        </div>
      </div>
    </main>
  )
}