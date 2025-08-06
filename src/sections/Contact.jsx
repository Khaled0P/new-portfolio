import TitleHeader from '../components/TitleHeader';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      setForm({ name: '', email: '', message: '' });
      toast.success("Email was sent, I'll reply as soon as possible")
    } catch (error) {
      toast.error("There was an error sending your email", error)
    } finally {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(false);

  return (
    <section id="contact" className="section-padding flex-center">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Get in Touch" sub="✉️ I'd love to hear from you!" />
        <div className="grid-12-cols mt-16">
          {/* CONTACT FORM - LEFT SIDE */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form className="w-full flex flex-col gap-7" onSubmit={handleSubmit} ref={formRef}>
                <div>
                  <label htmlFor="name" className="text-white-50 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-white-50 font-semibold"
                    >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <label
                  htmlFor="message"
                  className="text-white-50 font-semibold"
                  >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="input h-32"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn mt-4 w-full"
                >
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? 'Sending...' : 'Send Message'}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-right.svg" alt="arrow" className='animate-right' />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          {/* 3D Experience */}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-[#cd7c2e] rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import ContactExperience from '../components/ContactExperience';
import { useRef, useState } from 'react';
export default Contact;
