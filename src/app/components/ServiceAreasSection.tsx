"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ServiceAreasSection() {
  const areas = [
    "Arlington",
    "Everett",
    "Mukilteo",
    "Lynnwood",
    "Edmonds",
    "Bothell",
    "Mill Creek",
    "Mountlake Terrace",
    "Marysville",
    "Shoreline",
    "Seattle",
    "Burien",
    "Des Moines",
    "Kent",
    "Federal Way",
    "Lake Stevens",
    "Snohomish",
    "Monroe",
    "Woodinville",
    "Kirkland",
    "Redmond",
    "Sammamish",
    "Issaquah",
    "Maple Valley",
    "Covington",
    "Auburn",
  ];
  const sortedAreas = areas.sort((a, b) => a.localeCompare(b));


  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE — Areas List */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Areas We Service
          </h2>
          <p className="text-gray-600 mb-8">
            We proudly serve homeowners across the Greater Seattle region — from
            Arlington to Federal Way, and from Lake Stevens to Auburn on the
            East Side.
          </p>

          <ul className="grid grid-cols-2 gap-y-3">
            {sortedAreas.map((area, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
                viewport={{ once: true }}
                className="flex items-center text-gray-800"
              >
                <MapPin className="w-4 h-4 text-green-600 mr-2" />
                {area}
              </motion.li>
            ))}
          </ul>

          <p className="mt-8 text-gray-700">
            Don’t see your city?{" "}
            <a
              href="#contact"
              className="text-green-600 font-semibold hover:underline"
            >
              Contact us
            </a>{" "}
            — we may still serve your area!
          </p>
        </motion.div>

        {/* RIGHT SIDE — Google Map Embed */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d430946.0286414932!2d-122.3321!3d47.6062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1697392391200!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
