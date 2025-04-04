import React, { useRef, useState, useEffect } from 'react';
// import './Carousel.css'; // Optional for custom styles

interface CarouselProps {
  children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.clientWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', onScroll);
      return () => ref.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <div>
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
        }}
      >
        {children.map((child, i) => (
          <div
            key={i}
            style={{
              flex: '0 0 100%',
              scrollSnapAlign: 'start',
            }}
          >
            {child}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
        {children.map((_, i) => (
          <div
            key={i}
            style={{
              height: 8,
              width: 8,
              borderRadius: '50%',
              background: i === activeIndex ? '#000' : '#ccc',
              margin: '0 4px',
              transition: 'background 0.3s',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
