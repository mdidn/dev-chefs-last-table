import { useCallback } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect.hook";

export const useStopBodyScrolling = (flag: boolean) => {
	const handleStopScrolling = useCallback(() => {
		if (flag) {
			document.getElementsByTagName("html")[0].style.overflow = "hidden";
		}
	}, [flag]);
	useIsomorphicLayoutEffect(() => {
		handleStopScrolling();
		return () => {
			document.getElementsByTagName("html")[0].style.overflow = "auto";
		};
	}, [handleStopScrolling]);
};
