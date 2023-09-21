

export default function Home() {
    return (
        <>
          <div className="flex flex-col font-mono gap-4 bg-geometric-cubism w-screen h-screen">
            <div className="m-auto">
              <h1 className="text-9xl text-center text-black mx-auto">Logan Manery</h1>
              <br />
              <h1 className="text-7xl text-center text-black mx-auto">Developer, Life Long Learner</h1>
              <div className="flex p-10">
                <a 
                  className="text-white text-2xl border-2 text-center bg-black border-white mx-auto w-1/4"
                  href="mailto:logan.j.manery@gmail.com"
                  >Contact Me</a>
                <a 
                  className="text-white text-2xl border-2 text-center bg-black border-white mx-auto w-1/4"
                  href="https://github.com/LoganManery">My Work</a>
              </div> 
            </div>
          </div>
        </>
    )
}