import React from "react";

const Footer: React.FC = () => (
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
);

export default Footer;