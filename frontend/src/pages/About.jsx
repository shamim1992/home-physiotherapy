import React from 'react'

function About() {
  return (
    <div className='dark:bg-gray-900 dark:text-white'>
      <div className=" relative  overflow-hidden  dark:bg-gray-900 py-4s">
        <div className="max-w-7xl mx-auto dark:bg-gray-900 ">
          <div className="relative z-10 pb-8 dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-2xl tracking-tight font-extrabold  sm:text-3xl md:text-4xl">
                  About Us
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab veniam molestias quisquam a laboriosam corrupti tempore est hic, cum quas, amet tempora eum blanditiis tenetur iste cumque accusamus possimus quia minus provident excepturi architecto inventore dolorem. Dolorum laborum aperiam numquam reprehenderit laudantium provident libero iure dolor sapiente quis. Ullam reprehenderit eos quibusdam? In vitae reiciendis mollitia rem sit quisquam labore natus totam id tempora pariatur necessitatibus, perspiciatis et provident beatae excepturi laudantium molestias earum expedita placeat similique? Ipsum doloremque commodi nam, voluptatum consequatur quisquam ex, incidunt labore veniam quas aliquid est minus animi nihil eos? Molestias aliquam cumque temporibus sunt.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/3 p-5">
          <img className="rounded-md h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.pexels.com/photos/5473184/pexels-photo-5473184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
      </div>

      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 dark:bg-gray-900">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-6/12 ">
            {/* <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" /> */}
            <h1 className="text-3xl lg:text-4xl font-bold leading-9  pb-4">Mission</h1>
            <p className="font-normal text-base leading-6  ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>

          </div>
          <div className="w-full lg:w-6/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9  pb-4">Mission</h1>
            <p className="font-normal text-base leading-6  ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
          </div>

        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4">Our Story</h1>
            <p className="font-normal text-base leading-6  ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                <p className="font-medium text-xl leading-5  mt-4">Alexa</p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                <p className="font-medium text-xl leading-5  mt-4">Olivia</p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                <p className="font-medium text-xl leading-5  mt-4">Liam</p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                <p className="font-medium text-xl leading-5  mt-4">Elijah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About