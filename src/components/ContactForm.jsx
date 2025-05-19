import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_imryjeu',
        'template_2pv1y9k',
        form.current,
        'n83F_FnzkDTb0Otq9'
      )
      .then(
        () => {
          toast.success('✅ Message sent successfully!', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          form.current.reset();
        },
        (error) => {
          toast.error(`❌ Failed to send message: ${error.text}`, {
            position: 'top-right',
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        name="contact-form"
        className="max-w-md mx-auto p-6 rounded-2xl shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #ffffff, #d1d5db)', // white to grey
          border: '2px solid transparent',
          boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
        }}
      >
        <h3
          className="text-2xl font-extrabold mb-6 text-center"
          style={{ color: '#b5890b', textShadow: '0 0 6px #b5890b' }} // golden accent
        >
          Contact Me
        </h3>

        {/* Name */}
        <div className="mb-5">
          <label className="block mb-1 font-semibold text-gray-700">Your Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="John Doe"
            className="
              w-full p-3 rounded-lg
              bg-white
              border border-gray-300
              text-gray-900
              placeholder-gray-400
              transition
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              focus:shadow-lg
              "
            required
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-1 font-semibold text-gray-700">Your Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="you@example.com"
            className="
              w-full p-3 rounded-lg
              bg-white
              border border-gray-300
              text-gray-900
              placeholder-gray-400
              transition
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              focus:shadow-lg
              "
            required
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold text-gray-700">Your Message</label>
          <textarea
            name="message"
            placeholder="What's on your mind?"
            className="
              w-full p-3 rounded-lg
              bg-white
              border border-gray-300
              text-gray-900
              placeholder-gray-400
              resize-none
              transition
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              focus:shadow-lg
              "
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="
            w-full py-3 rounded-lg font-semibold
            bg-gradient-to-r from-blue-500 to-blue-700
            text-white
            shadow-md
            hover:from-blue-600 hover:to-blue-800
            transition
            duration-300
            focus:outline-none
            focus:ring-4 focus:ring-blue-300
          "
        >
          Send Message
        </button>
      </form>

      <ToastContainer />
    </>
  );
}
