import Button from "@atoms/Button/Button";
import { useAppDispatch } from "@hooks/useAppDispatch.hook";
import { decrement, increment } from "@store/counter/counterSlice";
import styles from "../../view/styles.module.scss";

const DecrementIncrement = () => {
	const dispatch = useAppDispatch();
	const handleIncrement = () => {
		dispatch(increment());
	};
	const handleDecrement = () => {
		dispatch(decrement());
	};
	return (
		<div className={styles.counterContainer}>
			<Button onClick={handleDecrement}>Decrement</Button>
			<Button onClick={handleIncrement}>Increment</Button>
		</div>
	);
};

export default DecrementIncrement;
