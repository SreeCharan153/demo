import { Button } from "@/components/ui/button";
import Image from "next/image";
import Event from "./events";
import StatsSection from "./stats";
export default function ESummitPage() {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen">
      {/* Navbar */}
      <header className="bg-[#161b22] fixed top-0 w-full z-50 shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Image src="/logo.png" alt="E-Summit Logo" width={50} height={50} />
          <nav className="space-x-6">
            {["Home", "Speakers", "Sponsors", "Investors", "Events", "Login", "About Us"].map((item) => (
              <a key={item} href="#" className="hover:text-gray-300 transition duration-300">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center pt-28 pb-12">
        <Image src="/logo.png" alt="E-Summit Logo" width={80} height={80} className="mx-auto" />
        <h1 className="text-3xl font-bold mt-4">E-Summit'25</h1>
        <h2 className="text-xl text-gray-400 mt-2">Raghu Engineering College</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Join the biggest entrepreneurship summit of the year. Connect with industry leaders, innovative startups, and fellow entrepreneurs in this transformative event.
        </p>
      </section>

      {/* Events Section */}
      {/*<section className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="bg-[#161b22] p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
              <h3 className="text-lg font-semibold">Event {index + 1}</h3>
              <p className="text-gray-400">Date: 2025-02-22</p>
              <p className="text-gray-400">Time: 10:00 AM - 12:00 PM</p>
              <p className="text-gray-400">Location: Conference Hall A</p>
            </div>
          ))}
        </div>
      </section>*/}
      <Event />
      {/* Stats Section */}
      <StatsSection />
      {/* Sponsors Section */}
      <section className="container mx-auto px-6 mt-12">
        <h2 className="text-2xl font-semibold mb-6">Sponsors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg flex justify-center items-center">
              <Image src="/placeholder.png" alt="Sponsor Logo" width={100} height={100} />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#161b22] text-center py-8 mt-12">
        <h2 className="text-xl font-semibold">Don't Miss Out</h2>
        <p className="text-gray-300 mt-2">Join us in making this event successful. Register now and be part of the excitement.</p>
        <Button className="mt-4 bg-white text-black px-6 py-2 rounded-md hover:bg-gray-300">
          Register Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1117] py-6 text-center mt-12">
        <p className="text-gray-400">&copy; 2025 E-Summit'25. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-3">
          {["facebook", "instagram", "twitter", "linkedin"].map((platform) => (
            <a key={platform} href="#" className="hover:text-gray-300">
              <Image src={`/${platform}.png`} alt={platform} width={24} height={24} />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
