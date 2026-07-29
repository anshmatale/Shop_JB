import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111111] text-gray-300 font-sans pt-16 border-t-4 border-primary">
      {/* Contact & Map Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 pb-12">
        {/* Contact Information */}
        <div className="space-y-8 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Logo and Name */}
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/logo.jpg"
                alt="Bajrang Chaat House Logo"
                className="w-14 h-14 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h3 className="font-display font-extrabold text-2xl text-white tracking-tight uppercase">
                  Bajrang <span className="text-primary">Chaat House</span>
                </h3>
                <p className="text-xs text-primary font-bold tracking-widest uppercase">Every Bite Bursting With Flavour!</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md pt-2">
              Savor the authentic taste of real Indian street food. Visit us to enjoy crispy chaat, fresh dosas, and spicy fast food prepared daily with the highest quality ingredients.
            </p>
          </div>

          {/* Contact Details List */}
          <div className="space-y-4 font-medium text-sm">
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="text-primary text-base pt-0.5"><i className="fa-solid fa-location-dot"></i></div>
              <div className="flex flex-col">
                <span className="text-white text-xs uppercase tracking-wider font-bold mb-0.5 text-gray-400">Address</span>
                <span>Near Jio BP Petrol Pump, Amgaon Road, Fulchur Naka, Gondia - 441601, Maharashtra</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="text-primary text-base pt-0.5"><i className="fa-solid fa-phone"></i></div>
              <div className="flex flex-col">
                <span className="text-white text-xs uppercase tracking-wider font-bold mb-0.5 text-gray-400">Phone Numbers</span>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <a href="tel:+919922780180" className="hover:text-primary transition-colors">+91 9922780180</a>
                  <span>&bull;</span>
                  <a href="tel:+919028634445" className="hover:text-primary transition-colors">+91 9028634445</a>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex items-start gap-3">
              <div className="text-primary text-base pt-0.5"><i className="fa-solid fa-share-nodes"></i></div>
              <div className="flex flex-col">
                <span className="text-white text-xs uppercase tracking-wider font-bold mb-0.5 text-gray-400">Social Handles</span>
                <div className="flex gap-4 pt-1">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-primary transition-colors text-xs bg-neutral-800 px-3 py-1.5 rounded-full"
                  >
                    <i className="fa-brands fa-facebook text-neutral-400"></i>
                    <span>Bajrang Chaat House</span>
                  </a>
                  <a
                    href="https://instagram.com/bajrangchaathouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-primary transition-colors text-xs bg-neutral-800 px-3 py-1.5 rounded-full"
                  >
                    <i className="fa-brands fa-instagram text-neutral-400"></i>
                    <span>@bajrangchaathouse</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bulk Orders Note */}
          <div className="bg-neutral-900 border-l-4 border-primary p-4 rounded-r-xl max-w-md">
            <p className="text-xs md:text-sm text-gray-300 font-semibold leading-relaxed">
              🎉 We also take Party Orders & Bulk Orders — call to enquire!
            </p>
          </div>
        </div>

        {/* Google Maps Card */}
        <div className="h-72 lg:h-96 w-full rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl relative bg-neutral-950">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.897008107936!2d80.19830575!3d21.40003055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2ba2780447385f%3A0xe2b4528148b1114b!2sFulchur%20Naka%2C%20Gondia%2C%20Maharashtra%20441601!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0 absolute inset-0 filter invert-[90%] hue-rotate-[180deg] grayscale-[20%]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bajrang Chaat House Location"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom copyright bar */}
      <div className="bg-neutral-950/80 text-gray-500 text-xs py-6 text-center border-t border-neutral-900 px-4">
        <p className="mb-2">© 2026 Bajrang Chaat House. All Rights Reserved.</p>
        <p>Made with ❤️ for Bajrang Chaat House</p>
      </div>
    </footer>
  );
}
