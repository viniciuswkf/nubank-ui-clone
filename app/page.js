export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      <div className="w-1/2 bg-black p-10 bg-center bg-[url('/nubank-bg-image.jpg')] bg-cover">
        <div className="w-20 h-20 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 82 46"
            fill="#fff"
          >
            <path
              title="Logotipo Nubank"
              d="M1.618 12.46A14.325 14.325 0 0 1 14.25 4.75c.19 0 .378 0 .564.01-2.44 2.551-3.748 5.671-3.939 10.441-.042 1.006 0 5.912 0 11.425v17.693H.049V25.007c0-1.993-.11-4.039 0-6.051.123-2.245.514-4.45 1.569-6.497ZM24.876.48a13.65 13.65 0 0 0-10.09 4.296c8.068 0 13.29 5.493 13.583 14.241.066 2.006.088 12.744.088 12.744v12.55h10.825V27.348c0-5.128.042-9.569-.316-12.625C37.968 6.194 32.748.481 24.875.481Zm57.075 26.4c.11-2.012 0-4.055 0-6.048V1.52H71.128v17.69c0 5.507.042 10.415 0 11.426-.19 4.772-1.498 7.89-3.939 10.44.187 0 .376.013.565.013a14.324 14.324 0 0 0 12.633-7.71c1.055-2.053 1.445-4.255 1.564-6.498ZM57.124 45.355a13.649 13.649 0 0 0 10.09-4.295c-8.068 0-13.29-5.493-13.583-14.242-.066-2.008-.095-6.989-.095-12.758V1.509l-10.818.011v16.977c0 5.128-.042 9.568.316 12.624 1.002 8.531 6.223 14.233 14.09 14.233Z"
              className="text-white"
            ></path>
          </svg>
        </div>
      </div>

      {/** LOGIN SESSION */}
      <div className="w-1/2 h-screen flex-col  items-center text-white bg-zinc-900">
        <div className="w-3/5 h-4/5 m-auto">
          <form
            action=""
            className="flex w-full h-full gap-5 flex-col justify-center"
          >
            <h1 className="text-2xl">Acesse sua conta</h1>
            <div className="flex flex-col">
              <label htmlFor="">CPF</label>
              <input type="text" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Senha</label>
              <input type="text" />
            </div>
            <span className="text-zinc-600">Possui 8 caracteres ou mais</span>
            <button className="bg-zinc-800 p-3 rounded-full mt-8">
              Continuar
            </button>
          </form>
        </div>
        <div className="flex bg-zinc-800 text-purple-400 h-1/5 flex-row items-center justify-center ">
          <span className="p-5">Esqueci minha senha</span>
          <span className=" p-5">Não sou cliente</span>
        </div>
      </div>
    </main>
  );
}
