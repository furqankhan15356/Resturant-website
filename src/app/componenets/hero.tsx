import Navbar from './navbar'

function Hero() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center bg-no-repeat relative flex flex-col justify-center top-0"
        style={{ backgroundImage: 'url("/Full-background (1).png")' }}
      >
        {/* Header with adaptive color */}
        <div className="absolute top-0 w-full z-10">
          <Navbar />
        </div>

        {/* Slogan Image Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20">
          <img
            src="/Slogan.png"
            alt="Slogan"
            className="w-3/4 md:w-1/2 lg:w-3/6"
          />
        </div>
      </div>
    </>
  )
}

export default Hero