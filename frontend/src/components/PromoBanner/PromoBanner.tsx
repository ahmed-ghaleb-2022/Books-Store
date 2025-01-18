import { Link } from "react-router-dom"
import bookPic from "../../assets/books_cover/awardbooks.png"


const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-[#1A8439] px-4 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2">
                <h2 className="text-4xl text-white font-bold mb-6 leading-snug">2024 National Book Awards for Fiction Shortlist</h2>
                <Link to="/shop" className=" block"><button className=" bg-yellow-300 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-400 transition-all ease-in duration-200">Get Promo Code</button></Link>
            </div>

            <div>
                <img src={bookPic} alt="" className="w-96" />
            </div>
        </div>
    </div>
  )
}

export default PromoBanner