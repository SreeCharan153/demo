import React from "react";

const EventCard = ({ name, date, time, location }) => {
  return (
    <div className="bg-[#161b22] p-6 rounded-lg shadow-md hover:scale-105 transition-transform text-white">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-400">Date: {date}</p>
      <p className="text-gray-400">Time: {time}</p>
      <p className="text-gray-400">Location: {location}</p>
    </div>
  );
};

const Events = ({ event1, event2, event3 }) => {
  return (
    <section className="container mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-6 text-white">Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard {...event1} />
        <EventCard {...event2} />
        <EventCard {...event3} />
      </div>
    </section>
  );
};

export default Events;