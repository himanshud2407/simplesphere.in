'use client';
import React from 'react';

export function useScroll(threshold: number = 20) {
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		const onScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY > threshold) {
				setScrolled(true);
			} else if (scrollY < Math.max(0, threshold - 30)) {
				// We use a larger hysteresis (30px) to prevent jitter from layout shifts
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	}, [threshold]);

	return scrolled;
}
