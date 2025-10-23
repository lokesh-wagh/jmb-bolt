import React from "react";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

const images = [
    "/jmb1.jpg",
    "/jmb2.jpg",
    "/jmb3.jpg",
    "/jmb4.jpg",
    "/jmb5.jpg",
    "/jmb6.jpg",
    "/jmb7.jpg",
    "/jmb8.jpg",
    "/jmb9.jpg",
    "/jmb10.jpg",
    "/jmb11.jpg",
    "/jmb12.jpg",
    "/jmb13.jpg",
];

const Gallery: React.FC = () => (
        <>
            <Navbar />

            {/*
                Mobile: single horizontal row (scrollable)
                Desktop (md+): 2-column grid
            */}
            <div className="px-4 py-4">
                {/*
                    Mobile: single column (stacked images)
                    Desktop (md+): 2-column grid
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {images.map((src, idx) => (
                        <div key={idx} className="w-full">
                            <img
                                src={src}
                                alt={`Gallery item ${idx + 1}`}
                                className="w-full h-auto rounded-lg object-cover shadow-sm"
                            />
                        </div>
                    ))}
                </div>

                <Footer />
            </div>
        </>
    
);

export default Gallery;