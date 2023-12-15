import { useEffect, useState } from "react";

interface IuseViewport {
	width: number;
	height: number;
}

const useViewport = (): IuseViewport => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		}
	}, []);
	useEffect(() => {
		const handleWindowResize = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		};
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);
	return { width, height };
};

export default useViewport;
