import BannerCards from "../BannerCards/BannerCards"



const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
            {/* left side  */}
            <div className="md:w-1/2 space-y-8 h-full">
              <h2 className="text-5xl font-bold leading-snug text-black">Buy and sell your Books <span className="text-blue-700">for the best price</span></h2>
              <p className="md:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi esse odit exercitationem magni, neque expedita fuga ipsum, ad vitae, odio iusto officiis quas in eius aut beatae ipsa quam!</p>
              <div>
                <input type="text" name="search" id="search" placeholder="Search for books" className="p-2 rounded-s-sm  outline-none"/>
                <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">Search</button>
              </div>
            </div>

            {/* right side  */}
            <div><BannerCards/></div>
        </div>
    </div>
  )
}

export default Banner