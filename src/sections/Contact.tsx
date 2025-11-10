import React, { useRef } from "react";
import { onlyText, onlyEmail } from "../helpers/validator";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
   // hook translate
    const { t } = useTranslation();
  // creo el form de tipo htmlFormElement
  const form = useRef<HTMLFormElement>(null);
  
  // funcion para enviar el email, En este caso el evento es de tipo submit, o sea, un evento de formulario.
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formEl = form.current;
  if (!formEl) return; // si es null, salimos antes

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
      formEl,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
    )
    .then(
      () => {
        alert("✅ Mensaje enviado con éxito.");
        formEl.reset();
      },
      (error) => {
        console.error("Error al enviar:", error);
        alert("❌ Hubo un error al enviar el mensaje.");
      }
    );
};


  return (
    <section
      id="contact"  
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-200 px-6 py-20"
    >
      {/* Contenedor principal */}
      <div className="max-w-3xl w-full flex flex-col items-center text-center gap-8">
        {/* Título */}
        <h2 className="text-4xl lg:text-5xl font-poppins regular font-bold text-rose-500 tracking-wide">
            {t("contact.title")}
        </h2>

        {/* Descripción */}
        <p className="text-gray-300 max-w-xl leading-relaxed text-sm lg:text-base">
                     {t("contact.desc")}
        </p>

        {/* Info de contacto */}
        <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg w-full lg:w-[80%] border border-gray-700">
          <p className="text-gray-400 mb-2">
            <strong className="text-gray-100">
               {t("about.card3")}: </strong>
            <a
              href="mailto:a.zunini@gmail.com"
              className="hover:text-rose-400 active:text-rose-400 transition-colors"
            >
              a.zunini@gmail.com
            </a>
          </p>
          <p className="text-gray-400">
            <strong className="text-gray-100">
              {t("about.card4")}: </strong>
            <a
              href="tel:+59896629318"
              className="hover:text-rose-400 active:text-rose-400 transition-colors"
            >
              096 629 318
            </a>
          </p>
        </div>

        {/* Formulario */}
        <form
          ref={form}// indico la referencia
          onSubmit={sendEmail}
          className="mt-10 flex flex-col gap-5 w-full lg:w-[80%]"
        >
          <input
            type="text"
            name="name"
            placeholder= {t("contact.inp-name")}
            required
            onKeyDown={onlyText}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <input
            type="email"
            name="email"
            placeholder= {t("contact.inp-email")}
            required
            onKeyDown={onlyEmail}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <textarea
            name="message"
            rows={5}
            placeholder= {t("contact.inp-desc")}
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
          ></textarea>

          <button
            type="submit"
            className="active:bg-rose-800 mt-3 px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-poppins font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
                      {t("contact.button")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

