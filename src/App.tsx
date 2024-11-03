import { MoveHorizontal } from 'lucide-react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { SliderImages } from './components/slider'

export function App() {

  const [amount, setAmount] = useState('')
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

  return (
    <main className='max-w-[1216px] mx-auto'>
      <div className="text-slate-50 h-screen grid grid-cols-2 max-md:grid-cols-1">

        <form onSubmit={handleConvertCurrency}
          className="flex flex-col items-center justify-center max-sm:scale-90"
        >

          <div className="flex flex-col items-center justify-center max-sm:scale-90">

            <div className='flex flex-col items-start -ml-20 gap-4 mb-5'>
              <div>
                <h1 className='text-4xl font-bold tracking-wider'>Esteja Sempre</h1>
                <h1 className='text-4xl font-bold tracking-wider'>Atualizado!</h1>
              </div>
              <h2 className='font-light text-slate-300'>Grátis, online e rápido.</h2>
            </div>

            <div className='flex flex-col gap-10 items-center border w-[480px] rounded-lg py-10'>
              <h1 className='font-semibold text-2xl max-sm:text-3xl'>Faça a sua conversão</h1>

              <div className='flex flex-col gap-2 w-[480px] px-10 mt-5'>
                <label
                  htmlFor="enterValue"
                  className='max-sm:text-xl'
                >
                  Digite o valor
                </label>
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                  autoComplete='off'
                  type="text"
                  id='enterValue'
                  className='bg-transparent border border-white rounded-lg outline-none py-1 px-2
                    max-sm:py-2'
                />
              </div>

              <div className='flex items-center justify-center gap-7'>

                <div className='flex flex-col gap-1'>
                  <label
                    htmlFor="fromCoin"
                    className='text-slate-50 max-sm:text-lg'
                  >
                    De
                  </label>
                  <select
                    onChange={(e) => setCoinFrom(e.target.value)}
                    value={coinFrom}
                    id='fromCoin'
                    className='border rounded-md px-4 py-2 bg-zinc-900 text-sm
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
                    <option value="ARS" selected>Peso Argentino</option>
                    <option value="TRY">Lira Turca</option>
                  </select>
                </div>

                <div className='mt-7'>
                  <MoveHorizontal />
                </div>

                <div className='flex flex-col gap-1'>
                  <label
                    htmlFor="toCoin"
                    className='max-sm:text-lg'
                  >
                    Para
                  </label>
                  <select
                    value={coinTo}
                    onChange={(e) => setCointTo(e.target.value)}
                    id='toCoin'
                    className='border rounded-md px-4 py-2 bg-zinc-900 text-sm
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
                    <option value="ARS" selected>Peso Argentino</option>
                    <option value="TRY">Lira Turca</option>
                  </select>
                </div>
              </div>

              <button

                className='mt-5 py-4 px-10 bg-purple-700 rounded-lg text-lg
                  hover:scale-95 duration-200'
              >
                Obter valor convertido
              </button>

              {result.length > 0 && coinTo != coinFrom && (
                <div className='flex gap-1 items-center font-semibold -mt-4 text-lg tracking-wider text-slate-50'
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