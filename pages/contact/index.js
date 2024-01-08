// components
import Circles from '/components/Circles';

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

// React
import { useState } from 'react';

const Contact = () => {
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle form data change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send data to the API route
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Process response from the server
      const data = await response.json();
      console.log(data);
      // Reset form or show success message
    } catch (error) {
      console.error('Form submission error:', error);
      // Handle errors
    }
  };

  return (
      <div className='h-full bg-primary/30'>
        <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
          {/* text & form */}
          <div className='flex flex-col w-full max-w-[700px]'>
            {/* text */}
            <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 text-center mb-12'
            >
              Let&apos;s <span className='text-accent'>connect.</span>
            </motion.h2>
            {/* form */}
            <motion.form
                onSubmit={handleSubmit}
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='flex-1 flex flex-col gap-6 w-full mx-auto'
            >
              {/* input group */}
              <div className='flex gap-x-6 w-full'>
                <input
                    type='text'
                    placeholder='name'
                    className='input'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type='email'
                    placeholder='email'
                    className='input'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
              </div>
              <input
                  type='text'
                  placeholder='subject'
                  className='input'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
              />
              <textarea
                  placeholder='message'
                  className='textarea'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
              ></textarea>
              <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group' type='submit'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let&apos;s talk
              </span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
  );
};

export default Contact;
