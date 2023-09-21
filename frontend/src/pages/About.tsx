

export default function About() {
    return (
      <>
        <div className="flex flex-col justify-center font-mono font-extrabold bg-gradient-to-b from-sky-200 to-rose-200 w-screen h-screen">
          <h1 className="self-center p-4 text-3xl">About</h1>
          <div className="gap-4 w-1/2 m-auto border-4 bg-white border-black overflow-scroll scrollbar-hide rounded-3xl p-10">
            <img className=" box-content float-left lg:w-1/4 sm:w-1/2 p-4" src="src/assets/cubism-person-computer.png" alt="Image" />
            <p className="">Hey there! I'm Logan from the vibrant city of Kitchener, ON. Born in the tech golden year of 1992 (when Windows 3.1 was the hottest thing around), I've evolved way faster than the floppy disk. Today, I'm a keen lifelong learner, swaying between the world of Python scripts and power tools. Just another day in the life of a tech enthusiast!</p>
            <br/>
            <p>While I'm old enough to remember the “dial-up internet” symphony, I'm young enough to know my JavaScript from my Java (one's essential for my web work, the other for my morning caffeine kick!). I proudly wear the badge of a Computer Programming student at Conestoga College. But wait, there's more! I'm not just about ones and zeros; I have some hands-on know-how with electrical systems. After all, you can't spell "electric" without "elite", right?</p>
            <br/>
            <p>Currently, I'm the "Bowling Machine Whisperer" at Bingemans in Kitchener. I can convince a malfunctioning machine to behave with just a stern look...and sometimes a bit of mechanical wizardry. My past roles at Rockwell Automation and Brock Solutions saw me channeling my inner Tony Stark, minus the Iron Man suit, of course. </p>
            <br/>
            <img className="box-content float-right lg:w-1/4 sm:w-1/2 p-4" src="src/assets/mountain-cubism.png"/>
            <p className="">From high school at Grand River Collegiate to now, I've had quite the academic tour. Dabbled in Electrical Engineering at Conestoga College, added a Google IT Support Professional Certificate to my trophy case, and now I'm leveling up with Computer Programming. With every new challenge, my motto remains: "Just another bug to squash!" </p>
            <br/>
            <p>Got a tech problem? There's a high chance I've got a tool (or code) for that! Whether it's wrangling databases with MongoDB, jazzing up websites with React, or going full detective mode on network security, I've got it covered. And if a machine acts up? Let's just say I know how to "turn it off and on again" with style.</p>
            <br/>
            <p>I converse fluently in tech and, of course, English. Looking for a "Hello, World!" in multiple programming languages? You're in for a treat! </p>
            <br/>
            <p>Wearing the Google IT Support Professional Certificate like a badge of honor. It's like getting a thumbs up from the tech giants themselves!</p>
            <br/>
            <p>Slide into my <a href="https://www.linkedin.com/in/logan-manery-4a80401b8/">Linkedin DMs</a>. I promise I'm friendlier than an error-free code on a Monday morning!</p>
          </div>
        </div>
      </>
    )
}