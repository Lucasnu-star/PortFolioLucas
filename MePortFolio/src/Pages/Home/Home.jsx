import '../../App.css';

function Home() {
  return (
    <body className="z-10 py-4 clip-custom min-h-screen w-full flex flex-col justify-around items-center mx-auto bg-gray-900 text-white p-4 md:flex-row md:items-center">

      <section className="mb-4 md:mb-0 md:mr-8 text-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">Lucas Nuñez</h1>
          <h2 className="py-3 text-xl md:text-3xl font-semibold opacity-15">Desarrollador Front End</h2>
        </div>
        <div className=" flex flex-col md:flex-row items-center py-4 text-lg md:text-3xl">
          <button className="mb-2 md:mb-0 text-white">
            <a className="" href="#">
              <img className='w-16 md:w-20 lg:w-24' src="/github-logo.svg" alt="GitHub Logo" />
            </a>
          </button>
          <button className="mb-2 md:mb-0 mx-4">
  <a className="text-white" href="">
    <img className='w-16 md:w-20 lg:w-24 filter invert-100' src="/linkedin-logo.svg" alt="LinkedIn Logo" />
  </a>
</button>
          <button className="mb-2 md:mb-0 mx-2 md:mx-4 lg:mx-5  py-2 px-4 md:px-5">
            <a href="">CV</a>
          </button>
        </div>
      </section>

    </body>
  );
}

export default Home;