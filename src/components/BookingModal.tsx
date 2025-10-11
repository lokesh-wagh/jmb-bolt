import React, { useState, useEffect } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

const BookingModal: React.FC<Props> = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!open) {
      setName('');
      setPhone('');
      setEmail('');
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      alert('Please fill all fields');
      return;
    }
    console.log('Booking submitted:', { name, phone, email });
    alert(`Thanks ${name}, we'll contact you at ${phone}.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-[20px] w-full max-w-md p-6 mx-4 shadow-[0px_0px_25px_5px_#00000040] [font-family:'Inria_Serif',Helvetica]">
        <h3 className="text-2xl font-bold mb-4 text-center">Book Now</h3>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <label className="flex flex-col items-center text-sm w-full">
            <span className="font-semibold mb-2">Name</span>
            <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 p-3 border rounded-[10px] w-full max-w-[320px] text-center" placeholder="Your full name" required />
          </label>

          <label className="flex flex-col items-center text-sm w-full">
            <span className="font-semibold mb-2">Contact Number</span>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} className="mt-1 p-3 border rounded-[10px] w-full max-w-[320px] text-center" placeholder="Mobile or phone number" required />
          </label>

          <label className="flex flex-col items-center text-sm w-full">
            <span className="font-semibold mb-2">Email</span>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 p-3 border rounded-[10px] w-full max-w-[320px] text-center" placeholder="you@example.com" required />
          </label>

          <div className="flex justify-center gap-4 mt-4 w-full">
            <button type="button" onClick={onClose} className="min-w-[140px] px-4 py-3 bg-white text-black rounded-[10px] shadow-[0px_0px_7px_4px_#00000040] [font-family:'Inria_Serif',Helvetica] font-bold hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" className="min-w-[140px] px-4 py-3 bg-white text-black rounded-[10px] shadow-[0px_0px_7px_4px_#00000040] [font-family:'Inria_Serif',Helvetica] font-bold hover:bg-gray-50">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
