import React, { useEffect, useRef, useState } from 'react';
import { RevealProps } from '../types';

export const Reveal: React.FC<RevealProps> = ({
    children,
    animation = 'fade-up',
    delay = 0,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const getAnimationClass = () => {
        if (!isVisible) return 'opacity-0 translate-y-8'; // Initial state

        switch (animation) {
            case 'scale-in': return 'animate-scale-in';
            case 'slide-right': return 'animate-slide-right';
            default: return 'animate-fade-up';
        }
    };

    return (
        <div
            ref={ref}
            className={`${className} transition-all duration-700 ${getAnimationClass()}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};