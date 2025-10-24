import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
// Card components used only by testimonials (commented out)
import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";
import { useBookingModal } from "../../components/BookingModalProvider";
// testimonials data removed — section commented out

const faqItems = [
  {
    question: "Do rooms have Wi-Fi and work desks?",
    answer: "Yes. Complimentary high-speed Wi-Fi is available across rooms and common areas; most rooms include a dedicated work desk.",
    isOpen: false,
  },
  {
    question: "What payment modes do you accept?",
    answer: "UPI, credit/debit cards, net banking, and bank transfer. Corporate bookings can request a GST invoice.",
    isOpen: false,
  },
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in: 12:00 PM · Check-out: 11:00 AM. Early check-in/late check-out is subject to availability and may incur a fee.",
    isOpen: false,
  },
  {
    question: "Do you have power backup?",
    answer: "Yes, 100% power backup for events and rooms, including stage and catering areas.",
    isOpen: false,
  },
  {
    question: "Is there parking and valet?",
    answer: "On-site parking for approximately 40 cars. Valet service is available on request.",
    isOpen: false,
  },
  {
    question: "Can we host pre-wedding shoots or use drones?",
    answer: "Yes, with prior permission. Drone usage must comply with DGCA rules and property safety norms.",
    isOpen: false,
  },
  {
    question: "Where are you located and how do we reach?",
    answer: "We’re at Sahraspali, Sahodara (In front of Bharat Petroleum), Ballia-277001.",
    isOpen: false,
  },
  {
    question: "What amenities do you provide in rooms?",
    answer: "Premium bedding, toiletries, hot water, Wi-Fi, TV, and more are provided.",
    isOpen: false,
  },
  {
    question: "Lost & Found policy",
    answer: "Items found on property are logged and stored for 30 days. Contact us with description/date to claim.",
    isOpen: false,
  },
];

const galleryImages = [
  { src: "/jmb1.jpg", alt: "JMB Image 1" },
  { src: "/jmb2.jpg", alt: "JMB Image 2" },
  { src: "/jmb3.jpg", alt: "JMB Image 3" },
  { src: "/jmb4.jpg", alt: "JMB Image 4" },
  { src: "/jmb5.jpg", alt: "JMB Image 5" },
  { src: "/jmb6.jpg", alt: "JMB Image 6" },
  { src: "/jmb7.jpg", alt: "JMB Image 7" },
  { src: "/jmb8.jpg", alt: "JMB Image 8" },
  { src: "/jmb9.jpg", alt: "JMB Image 9" },
  { src: "/jmb10.jpg", alt: "JMB Image 10" },
  { src: "/jmb11.jpg", alt: "JMB Image 11" },
  { src: "/jmb12.jpg", alt: "JMB Image 12" },
  { src: "/jmb13.jpg", alt: "JMB Image 13" },
];

export const Desktop = (): JSX.Element => {
  // gallery state and booking modal
  const [isGalleryFaded] = useState(false);
  const [galleryIndex] = useState(0);
  const navigate = useNavigate();
  const bookingModal = useBookingModal();

  return (
    <div className="bg-white overflow-x-hidden w-full min-h-screen relative">
      
      <Navbar/>
      <img
      id="home"
        className="relative  left-0 w-full object-cover"
        alt="Building"
        src="/building-2-1.png"
      />

      <div className="absolute top-[145vh] left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent backdrop-blur-sm" />
  
      <section  className="relative top-[25vh] left-[7.6%] right-[7.6%] w-[85%] flex flex-col gap-12 lg:gap-16">
        <p className="w-full [font-family:'Inria_Serif',Helvetica] font-bold text-black text-lg md:text-xl lg:text-2xl text-center tracking-[0] leading-relaxed px-4">
          JMB Resort is a premium destination designed to host your most
          cherished occasions. With elegant AC rooms, spacious lawns, and grand
          AC halls, we blend modern luxury with warm hospitality. Perfect for
          weddings, parties, corporate events, and family gatherings, JMB Resort
          ensures every celebration is marked with comfort, style, and
          unforgettable memories.
        </p>

        <div className="mx-auto w-full max-w-4xl flex justify-around items-center px-4">
          <img
            className="w-[7.6%] max-w-[115px] h-auto object-contain"
            alt="Rooms icon"
            src="/rooms-icon-1.png"
          />

          <img
            className="w-[8.3%] max-w-[126px] h-auto object-contain"
            alt="Lawns icon"
            src="/lawns-icon-1.png"
          />

          <img
            className="w-[8.3%] max-w-[126px] h-auto object-contain"
            alt="Halls icon"
            src="/halls-icon-1.png"
          />
        </div>
      </section>

      <section id="gallery" className="relative mt-[24vh] mx-auto max-w-7xl ">
            <h2 className="text-left [font-family:'Inria_Serif',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-5xl mb-12">
              Gallery
            </h2>
      
            {/* Gallery grid */ }

            {/* Render 4 images (2x2) and paginate by 2 on each View more click */}
            <div className="w-full">
              <div className="relative mx-auto">
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                  {Array.from({ length: 4 }).map((_, i) => {
                    const idx = (galleryIndex + i) % galleryImages.length;
                    const img = galleryImages[idx];
                    return (
                      <div key={idx} className={`relative w-full h-[40vh] md:h-[24vh] lg:h-[40vh] rounded-lg overflow-hidden shadow-md transform transition-all duration-300 ease-in-out ${isGalleryFaded ? 'opacity-0 -translate-y-3' : 'opacity-100 translate-y-0'}`}>
                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                        {/* overlay for specific positions: index+1 and index+3 */}
                        {(i === 1 || i === 3) && (
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-85% to-white" />
                          
                        )}
                       
                      </div>
                    );
                  })}
                </div>

                {/* positioned button: aligned to the right column, vertically centered between top & bottom right tiles */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <Button
                    onClick={() => {
                      // navigate to the dedicated gallery page
                      navigate('/gallery');
                    }}
                    className="w-[5%] min-w-[140px] max-w-[219px] py-3 bg-[#fffbfb] text-black rounded-[10px] shadow-[0px_0px_7px_4px_#00000040] [font-family:'Inria_Serif',Helvetica] font-bold text-lg md:text-xl hover:bg-gray-50 h-auto"
                  >
                    View more
                  </Button>
                </div>
              </div>
            </div>
          </section>

      <Button
        onClick={() => bookingModal.open()}
        className="absolute top-[105vh] left-1/2 transform -translate-x-1/2 w-[14.5%] min-w-[180px] max-w-[219px] py-3 bg-white text-black rounded-[10px] shadow-[0px_0px_7px_4px_#00000040] [font-family:'Inria_Serif',Helvetica] font-bold text-lg md:text-xl hover:bg-gray-50 h-auto"
      >
        Book Now!
      </Button>


      <h2 id="virtual-invitation" className="relative mt-24 text-center [font-family:'Inria_Serif',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-5xl">
        Virtual Invitation
      </h2>

      <div className="relative mt-24 mx-auto max-w-6xl px-0 md:px-0 lg:px-0 aspect-video bg-[#d9d9d9] flex items-center justify-center overflow-hidden rounded-lg">
        <video
          className="w-full h-full object-fill rounded-lg"
          controls
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hotelnew.mp4" type="video/mp4" />
          <source src="/hotelnew.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <section id="about" className="relative mt-[10vh] mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-center [font-family:'Inria_Serif',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-5xl mb-8">
          Our Vision
        </h2>

        <p className="w-full [font-family:'Inria_Serif',Helvetica] font-bold text-black text-lg md:text-xl lg:text-2xl text-center tracking-[0] leading-relaxed mb-12">
          Our vision is to create a space where elegance meets comfort, and
          every celebration becomes a cherished memory. At JMB, we aspire to be
          the region&apos;s most trusted destination for hospitality and events,
          offering world-class facilities, warm service, and timeless
          experiences that bring people together.
        </p>

        <div className="flex flex-col items-center gap-6">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-full shadow-[0px_0px_25px_5px_#00000040] overflow-hidden flex items-center justify-center">
            <img
              className="w-[95%] h-[95%] rounded-full border-[0.5px] border-solid border-black object-cover"
              alt="Founder"
              src="/founder-1.png"
            />
          </div>

          <h3 className="[font-family:'Inria_Serif',Helvetica] font-bold text-black text-2xl md:text-3xl lg:text-4xl text-center">
            Gyanendra Kumar Rai
          </h3>

          <p className="[font-family:'Inria_Serif',Helvetica] font-bold text-black text-xl md:text-2xl lg:text-3xl text-center">
            Chairman
          </p>
        </div>
      </section>

      

     

      {/* Testimonials section commented out */}

      <section className="relative mt-24 mx-auto max-w-5xl px-4 md:px-8 lg:px-12 py-12">
        <h2 className="text-left [font-family:'Inria_Serif',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-5xl mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-6"
        >
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-none">
              {/* single rounded container that holds trigger and content */}
              <div className="w-full bg-white rounded-[50px] shadow-[0px_0px_15px_5px_#00000040] overflow-hidden">
                <AccordionTrigger className="w-full min-h-[72px] px-6 md:px-12 lg:px-20 py-6 [font-family:'Inria_Serif',Helvetica] font-bold text-black text-base md:text-lg lg:text-xl text-left tracking-[0] leading-[normal] hover:no-underline data-[state=open]:rounded-[40px]">
                  {item.question}
                </AccordionTrigger>

                {/* Content will be visually inside the same rounded container and only visible when item is open */}
                <AccordionContent className="px-6 md:px-12 lg:px-20 pb-6 [font-family:'Inria_Serif',Helvetica] font-normal text-black text-base md:text-lg lg:text-xl text-left tracking-[0] leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      
      <Footer/>
      

      
    </div>
  );
};
