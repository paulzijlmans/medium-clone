function Banner() {
  return (
    <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
      <div className="space-y-5 px-10">
        <h1 className="max-w-xl font-serif text-6xl">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{' '}
          is a place to write, read, and connect
        </h1>
        <h2>
          It's easy and free to post your thinking on any topic and connect with
          millions of readers.
        </h2>
      </div>

      <img
        className="hidden h-32 md:inline-flex lg:h-full"
        src="/images/medium-logo2.png"
        alt="Medium Logo"
      />
    </div>
  )
}

export default Banner
