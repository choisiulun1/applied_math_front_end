'use client';
import {useState, useEffect, useRef} from 'react';
import SearchBar from './SearchBar';
import NutritionLabel from './NutritionLabel';
import Carousel from "@/app/components/Carousel";

export default function OverlayWrapper() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedSuggestion, setSelectedSuggestion] = useState('');
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [showCapturedOverlay, setShowCapturedOverlay] = useState(false);
    const foods = useRef([])
    const [loading, setLoading] = useState(false);

    const handleBarcodeClick = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();

            video.addEventListener('canplay', () => {
                requestAnimationFrame(() => {
                    const canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    const ctx = canvas.getContext('2d');
                    if (ctx) {
                        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                        const imageData = canvas.toDataURL('image/png');
                        setCapturedImage(imageData);
                        setShowCapturedOverlay(true);
                    }
                    stream.getTracks().forEach(track => track.stop());
                });
            });
        } catch (err) {
            console.error("Camera access denied or error:", err);
        }
    };

    useEffect(() => {
        if (showOverlay && selectedSuggestion) {
            setLoading(true);
            fetch('/api/nlp_query', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({query: selectedSuggestion}),
            })
                .then(async (res) => {
                    const json = await res.json();
                    foods.current = json.foods;
                    console.log(foods.current);
                })
                .finally(() => setLoading(false));
        }
    }, [showOverlay, selectedSuggestion]);

    return (
        <div className="bg-blue-600 rounded-t-[30px] pt-6 pb-4">
            <SearchBar
                onSuggestionClick={(value) => {
                    setSelectedSuggestion(value);
                    setTimeout(() => {
                        setShowOverlay(true);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 100);
                }}
                onEnterPress={(value) => {
                    setSelectedSuggestion(value);
                    setTimeout(() => {
                        setShowOverlay(true);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 100);
                }}
                onBarcodeClick={handleBarcodeClick}
            />
            {showOverlay && (
                <div
                    className="absolute top-0 left-0 w-full h-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <div className=" p-4 rounded-lg">
                        <button
                            className="absolute top-6 right-6 text-sm font-medium text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-md shadow-lg transition duration-200"
                            onClick={() => setShowOverlay(false)}
                        >
                            ✕ Close
                        </button>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <Carousel>
                                {(foods.current as Array<{ food_name: string; [key: string]: any }>).map((food, index) => (
                                <div key={index}>
                                    <p className="text-2xl font-bold leading-none">Food: {food.food_name}</p>
                                    <div >
                                        <NutritionLabel food={food}/>
                                    </div>
                                </div>
                            ))}
                            </Carousel>
                        )}
                    </div>
                </div>
            )}
            {showCapturedOverlay && capturedImage && (
                <div className="absolute top-0 left-0 w-full h-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="relative w-[90vw] h-[70vh]">
                        <img
                            src={capturedImage}
                            alt="Captured"
                            className="object-contain rounded-lg shadow-lg w-full h-full"
                        />
                    </div>
                    <button
                        onClick={() => setShowCapturedOverlay(false)}
                        className="absolute top-6 right-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
}