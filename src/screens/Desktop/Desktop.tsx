import { Star as StarIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const testimonials = [
  {
    name: "Suresh Kumar",
    comment: "Really loved the blah blah blah...",
    rating: 5,
  },
  {
    name: "Suresh Kumar",
    comment: "No Comments",
    rating: 5,
  },
  {
    name: "Suresh Kumar",
    comment: "Really loved the blah blah blah...",
    rating: 5,
  },
  {
    name: "Suresh Kumar",
    comment: "Really loved the blah blah blah...",
    rating: 5,
  },
  {
    name: "Suresh Kumar",
    comment: "Really loved the blah blah blah...",
    rating: 5,
  },
  {
    name: "Suresh Kumar",
    comment: "Really loved the blah blah blah...",
    rating: 5,
  },
  {
    name: "Suresh Kumar",
    comment: "Really loved the blah blah blah...",
    rating: 5,
  },
  {
    name: "Suresh Kumar",
    comment: "Really loved the blah blah blah...",
    rating: 5,
  },
];

const faqItems = [
  {
    question: "What is this?",
    answer:
      "This is the answer to the above question it contains random texts. It will be only plain text without any additional media.",
    isOpen: false,
  },
  {
    question: "What is this?",
    answer: "",
    isOpen: true,
  },
  {
    question: "What is this?",
    answer: "",
    isOpen: false,
  },
  {
    question: "What is this?",
    answer: "",
    isOpen: false,
  },
  {
    question: "What is this?",
    answer: "",
    isOpen: false,
  },
  {
    question: "What is this?",
    answer: "",
    isOpen: false,
  },
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white overflow-x-hidden w-full min-h-screen relative">
      <img
        className="relative top-[10vh] left-0 w-full object-cover"
        alt="Building"
        src="/building-2-1.png"
      />

      <div className="absolute top-[-20vh] left-0 w-full h-[17vh] bg-[linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />

      <div className="absolute top-[-20vh] left-0 w-full h-[17vh] bg-[linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />

      <div className="absolute top-[39vh] left-0 w-full h-[17vh] rotate-[-179.37deg] bg-[linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />

      <div className="absolute top-[39vh] left-0 w-full h-[17vh] rotate-[-179.37deg] bg-[linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />

      <section className="relative top-[15vh] left-[7.6%] right-[7.6%] w-[85%] flex flex-col gap-12 lg:gap-16">
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
       <section className="relative mt-[24vh] mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <h2 className="text-left [font-family:'Inria_Serif',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-5xl mb-12">
          Gallery
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="w-full aspect-[16/11] bg-[#d9d9d9]" />
          <div className="w-full aspect-[16/11] bg-[#d9d9d9]" />
          <div className="w-full aspect-[16/11] bg-[#d9d9d9]" />
          <div className="w-full aspect-[16/11] bg-[#d9d9d9]" />
        </div>

        <div className="flex justify-center mt-8">
          <Button className="w-[14.5%] min-w-[180px] max-w-[219px] py-3 bg-[#fffbfb] text-black rounded-[10px] shadow-[0px_0px_7px_4px_#00000040] [font-family:'Inria_Serif',Helvetica] font-bold text-lg md:text-xl hover:bg-gray-50 h-auto">
            View more
          </Button>
        </div>
      </section>
      <Button className="absolute top-[27.5vh] left-1/2 transform -translate-x-1/2 w-[14.5%] min-w-[180px] max-w-[219px] py-3 bg-white text-black rounded-[10px] shadow-[0px_0px_7px_4px_#00000040] [font-family:'Inria_Serif',Helvetica] font-bold text-lg md:text-xl hover:bg-gray-50 h-auto">
        Book Now!
      </Button>


      <h2 className="relative mt-24 text-center [font-family:'Inria_Serif',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-5xl">
        Virtual Tour
      </h2>

      <div className="relative mt-24 mx-auto max-w-6xl px-4 md:px-8 lg:px-12 aspect-video bg-[#d9d9d9] flex items-start justify-start">
        <img
          className="w-16 h-20 md:w-20 md:h-24 lg:w-28 lg:h-32 object-contain"
          alt="Polygon"
          src="/polygon-1.svg"
        />
      </div>
      
      <section className="relative mt-[10vh] mx-auto max-w-4xl px-4 py-12">
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

      

     

      <section className="relative mt-24 mx-auto max-w-7xl px-4 md:px-8 lg:px-12 py-12">
        <h2 className="text-left [font-family:'Inria_Serif',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-5xl mb-12">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="w-full min-h-[249px] bg-white rounded-[20px] shadow-[0px_0px_15px_5px_#00000040]"
            >
              <CardContent className="p-5 flex flex-col gap-3">
                <h3 className="[font-family:'Inria_Serif',Helvetica] font-bold text-black text-lg text-center tracking-[0] leading-[normal]">
                  {testimonial.name}
                </h3>

                <div className="flex gap-1 justify-center">
                  {Array.from({ length: testimonial.rating }).map(
                    (_, starIndex) => (
                      <StarIcon
                        key={starIndex}
                        className="w-7 h-7 md:w-8 md:h-8 fill-yellow-400 text-yellow-400"
                      />
                    ),
                  )}
                </div>

                <p
                  className={`[font-family:'Inria_Serif',Helvetica] ${testimonial.comment === "No Comments" ? "font-light" : "font-normal"} text-black text-base md:text-lg text-center tracking-[0] leading-[normal] mt-2`}
                >
                  {testimonial.comment}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

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
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none"
            >
              <AccordionTrigger
                className="w-full min-h-[72px] bg-white rounded-[50px] shadow-[0px_0px_15px_5px_#00000040] px-6 md:px-12 lg:px-20 py-6 [font-family:'Inria_Serif',Helvetica] font-bold text-black text-base md:text-lg lg:text-xl text-center tracking-[0] leading-[normal] hover:no-underline data-[state=open]:rounded-[40px]"
              >
                {item.question}
              </AccordionTrigger>
              {item.answer && (
                <AccordionContent className="px-6 md:px-12 lg:px-20 pt-4 [font-family:'Inria_Serif',Helvetica] font-normal text-black text-base md:text-lg lg:text-xl text-center tracking-[0] leading-relaxed">
                  {item.answer}
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      

      <footer className="relative mt-24 w-full bg-[#424242] py-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="[font-family:'Inria_Serif',Helvetica] font-bold text-white text-lg md:text-xl block">
              The JMB Resort
            </span>
            <span className="[font-family:'Inria_Serif',Helvetica] font-normal text-white text-base md:text-lg">
              All rights reserved
            </span>
          </div>

          <div className="flex justify-center gap-8 md:gap-12 mb-8">
            <img
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
              alt="Instagram"
              src="/black-and-white-instagram-logo-png-file-1.png"
            />
            <img
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
              alt="Facebook"
              src="/facebook-app-round-white-icon-1.png"
            />
            <img
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
              alt="Youtube"
              src="/youtube-app-white-icon-1.png"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center mb-8">
            <div className="[font-family:'Inria_Serif',Helvetica] text-white text-sm md:text-base">
              <span className="font-bold underline block mb-2">Call us on</span>
              <span>
                +91 99999 99991<br />
                +91 99999 99992<br />
                +91 99999 99993
              </span>
            </div>

            <div className="[font-family:'Inria_Serif',Helvetica] text-white text-sm md:text-base">
              <span className="font-bold underline block mb-2">Visit us at</span>
              <span>
                Sahodara (in front of Bharat petrol pump), Sahraspali,
                Ballia-277001
              </span>
            </div>

            <div className="[font-family:'Inria_Serif',Helvetica] text-white text-sm md:text-base">
              <span className="font-bold underline block mb-2">e-Mail us on</span>
              <span>helpdesk@jmbresort.com</span>
            </div>
          </div>

          <p className="[font-family:'Inria_Serif',Helvetica] font-normal text-white text-xs md:text-sm text-center max-w-4xl mx-auto">
            Please note that the images in the website might be slightly
            different than the actual resort as the resort is in its finishing
            stage. The actual images will be updated soon. Until then, please
            visit the site at given address for actual views.
          </p>
        </div>
      </footer>

      <header className="fixed top-0 left-0 right-0 w-full h-16 md:h-20 bg-white shadow-md z-50 flex items-center justify-between px-4 md:px-8">
        <img
          className="h-12 md:h-16 w-auto object-contain"
          alt="JMB Resort Logo"
          src="/group-32-3.png"
        />

        <nav className="hidden md:flex [font-family:'Inria_Serif',Helvetica] font-bold text-black text-base lg:text-lg gap-6 lg:gap-8">
          <a href="#home" className="hover:text-gray-600">Home</a>
          <a href="#about" className="hover:text-gray-600">About us</a>
          <a href="#gallery" className="hover:text-gray-600">Gallery</a>
          <a href="#virtual-tour" className="hover:text-gray-600">Virtual Tour</a>
        </nav>

        <Button className="w-32 md:w-40 lg:w-48 py-2 md:py-3 bg-white text-black rounded-[10px] shadow-[0px_0px_7px_4px_#00000040] [font-family:'Inria_Serif',Helvetica] font-bold text-sm md:text-base lg:text-lg hover:bg-gray-50 h-auto">
          Book Now!
        </Button>
      </header>
    </div>
  );
};
