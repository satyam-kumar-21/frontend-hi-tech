import { useState } from "react"
import vikash from "../../../src/Image/Testinomials/vikash.png"
import akshay from "../../../src/Image/about/akshay.jpeg"

const Testinomials =  () => {

    const testimonials = [
        {
            avatar: vikash,
            name: "Vikash singh",
            title: "Founder of Fluent Vikash",
            quote: "Hi-tech Junction exceeded all my expectations. Seamless integration, impeccable reliability, and truly essential for our daily operations."
        },
        {
            avatar: akshay,
            name: "Akshay dangi",
            title: "Software developer",
            quote: "Hi-tech Junction is a fantastic company! Their software solutions are top-notch, reliable, and essential for our business success."
        },
        
    ]

    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    return (
        <section className="py-14 bg-gray-50">
            <div className="max-w-screen-xl  mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-blue-900 font-bold pb-6">What people are saying</h3>
                    <ul>
                        {
                            testimonials.map((item, idx) => (
                                currentTestimonial == idx ? (
                                    <li key={idx}>
                                        <figure>
                                            <blockquote>
                                                <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                                                    “{item.quote}“
                                                </p>
                                            </blockquote>
                                            <div className="mt-6">
                                                <img src={item.avatar} className="w-16 h-16 mx-auto rounded-full" />
                                                <div className="mt-3">
                                                    <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                    <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ) : ""
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-6">
                    <ul className="flex gap-x-3 justify-center">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx}>
                                    <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${currentTestimonial == idx ? "bg-indigo-600" : "bg-gray-300"}`}
                                        onClick={() => setCurrentTestimonial(idx)}
                                    ></button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Testinomials