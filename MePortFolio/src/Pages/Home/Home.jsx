import jsonGif from './public/business-ideas.json'

function Home() {
  return (
    <article className="h-screen w-full flex mx-auto bg-gray-900 text-white ">
        <section>
            <div>
            <h1>Lucas Nuñez</h1>
            <h2>Desarrolador Front End</h2>
            </div>
            <div>
                <button><a href="">linke</a></button>
                <button><a href="">git</a></button>
                <button><a href="">cv</a></button>
            </div>
            
        </section>
        <section>
            <img src={jsonGif} alt="" />
        </section>

    </article>
  )
}
export default Home