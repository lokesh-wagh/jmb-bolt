import React from "react";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

const images = [
    "https://picsum.photos/id/1015/300/200",
    "https://picsum.photos/id/1016/300/200",
    "https://picsum.photos/id/1018/300/200",
    "https://picsum.photos/id/1020/300/200",
    "https://picsum.photos/id/1024/300/200",
    "https://picsum.photos/id/1025/300/200",
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