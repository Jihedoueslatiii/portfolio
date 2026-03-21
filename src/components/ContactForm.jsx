import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const form = useRef();
  const send = e => {
    e.preventDefault();
    emailjs.sendForm('service_imryjeu','template_2pv1y9k',form.current,'n83F_FnzkDTb0Otq9')
      .then(() => { toast.success('Sent!',{position:'top-right',autoClose:3000}); form.current.reset(); },
            err => { toast.error(`Failed: ${err.text}`,{position:'top-right',autoClose:5000}); });
  };
  const lbl = { display:'block',marginBottom:3,fontSize:'.7rem',fontWeight:600,color:'var(--text-4)',letterSpacing:'.04em',textTransform:'uppercase' };
  return (
    <>
      <form ref={form} onSubmit={send} style={{ display:'flex',flexDirection:'column',gap:'.6rem' }}>
        <div><label style={lbl}>Name</label><input type="text" name="user_name" placeholder="Your name" className="input" required /></div>
        <div><label style={lbl}>Email</label><input type="email" name="user_email" placeholder="you@example.com" className="input" required /></div>
        <div><label style={lbl}>Message</label><textarea name="message" placeholder="What's on your mind?" className="input" rows={4} style={{ resize:'none' }} required /></div>
        <button type="submit" className="btn" style={{ width:'100%',justifyContent:'center',padding:'10px',fontSize:'.84rem',marginTop:2 }}>Send message</button>
      </form>
      <ToastContainer theme="light" />
    </>
  );
}
