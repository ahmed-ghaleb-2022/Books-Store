import BannerCards from "../BannerCards/BannerCards"



const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-sky-400 flex items-center">
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
            {/* left side  */}
            <div className="md:w-1/2 space-y-8 h-full">
              <h2 className="text-5xl font-bold leading-snug text-white">Buy and sell your Books <span className="text-yellow-300">for the best price</span></h2>
              <p className="md:w-4/5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi esse odit exercitationem magni, neque expedita fuga ipsum, ad vitae, odio iusto officiis quas in eius aut beatae ipsa quam!</p>
              <div>
                <input type="text" name="search" id="search" placeholder="Search for books" className="p-2 rounded-s-sm  outline-none"/>
                <button className=" bg-yellow-300 text-black px-6 py-2  font-semibold hover:bg-yellow-400 transition-all ease-in duration-200">Search</button>
              </div>
            </div>

            {/* right side  */}
            <div><BannerCards/></div>
        </div>
    </div>
  )
}

export default Banner