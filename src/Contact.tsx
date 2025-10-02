import type { FC } from "react"
import "./index.css"
const Contact:FC=()=>{
    return(
        <section className=" m-15">
            <h1 className="text-center text-white text-4xl underline decoration-amber-600">Contact</h1>
            <div className="flex justify-center bg-gray-800 mt-10">
                <ul className="m-10 flex flex-row gap-4">
                    <li><a href="https://www.linkedin.com/in/suresh-r-073127245/" target="blank"><img className="w-[60px] h-[60px] transition ease-in-out hover:scale-[1.10]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="" /></a></li>
                    <li><a href="https://github.com/Suresh3105" target="blank"><img className="w-[60px] h-[60px] transition ease-in-out hover:scale-[1.10]" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" /></a></li>
                    <li><a href="https://mail.google.com/mail/?view=cm&to=sureshprasanth143@gmail.com&su=Hello&body=This%20is%20a%20test%20email"
                    target="blank"><img className="w-[60px] h-[60px] transition ease-in-out hover:scale-[1.10]" src="https://thumbs.dreamstime.com/b/%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C-201003176.jpg" alt="" /></a></li>
                    <li><a href="tel:+919360708278" target="blank"><img className="w-[60px] h-[60px] transition ease-in-out hover:scale-[1.10]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EZ3kU9P9iZ70ZZcXJQfPoeSVzs7mbcMn2Q&s" alt="" /></a></li>
                    <li><a href="https://wa.me/919677454259?text=Hello%20Suresh!" target="blank"><img className="w-[60px] h-[60px] transition ease-in-out hover:scale-[1.10]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/2048px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png" alt="" /></a></li>
                </ul>
            </div>
        </section>
    )
}
export default Contact;