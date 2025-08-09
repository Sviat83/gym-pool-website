import { useEffect, useRef, useState } from "react";

const CounterOnScroll = ({ value, baseDuration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        let observer;
        let startTime;
        let animationFrame;

        // Адаптивна тривалість: менші числа - довша анімація
        const getDuration = (val) => {
            if (val <= 10) return baseDuration * 1.5; // 3 секунди для малих чисел
            if (val <= 50) return baseDuration * 1.2; // 2.4 секунди для середніх
            if (val <= 100) return baseDuration; // 2 секунди
            return baseDuration * 0.8; // 1.6 секунди для великих чисел
        };

        const duration = getDuration(value);

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Використовуємо easeOutQuart для плавної анімації
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(easeOutQuart * value);

            setCount(currentValue);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        const handleScroll = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                animationFrame = requestAnimationFrame(animate);
                observer.disconnect();
            }
        };

        observer = new IntersectionObserver(handleScroll, { threshold: 0.3 });
        if (ref.current) observer.observe(ref.current);

        return () => {
            if (observer) observer.disconnect();
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [value, baseDuration]);

    return <span ref={ref}>{count}</span>;
};

export default CounterOnScroll;