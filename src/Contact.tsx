import type { FC } from "react";
import "./index.css";

const Contact: FC = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-10">
      <h1 className="text-center text-white text-4xl underline decoration-amber-600 mb-8">
        Contact
      </h1>

      <div className="flex justify-center">
        <ul className="flex flex-wrap justify-center gap-6">
          {/* LinkedIn */}
          <li>
            <a href="https://www.linkedin.com/in/suresh-r-073127245/" target="_blank" rel="noreferrer">
              <img className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110"
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" 
                   alt="LinkedIn" />
            </a>
          </li>

          {/* GitHub */}
          <li>
            <a href="https://github.com/Suresh3105" target="_blank" rel="noreferrer">
              <img className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110"
                   src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" 
                   alt="GitHub" />
            </a>
          </li>

          {/* Email */}
          <li>
            <a href="mailto:sureshprasanth143@gmail.com" target="_blank" rel="noreferrer">
              <img className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110"
                   src="https://thumbs.dreamstime.com/b/%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C-201003176.jpg" 
                   alt="Email" />
            </a>
          </li>

          {/* Phone */}
          <li>
            <a href="tel:+919360708278" target="_blank" rel="noreferrer">
              <img className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110"
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EZ3kU9P9iZ70ZZcXJQfPoeSVzs7mbcMn2Q&s" 
                   alt="Phone" />
            </a>
          </li>

          {/* WhatsApp */}
          <li>
            <a href="https://wa.me/919677454259?text=Hello%20Suresh!" target="_blank" rel="noreferrer">
              <img className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110"
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/2048px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png" 
                   alt="WhatsApp" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
