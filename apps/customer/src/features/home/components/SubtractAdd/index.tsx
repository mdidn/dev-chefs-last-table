import Button from "@atoms/Button/Button";
import { add, subtract } from "@store/counter/counterSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../../view/styles.module.scss";

const SubtractAdd = () => {
	const [countInput, setCountInput] = useState<number>(0);
	const dispatch = useDispatch();
	const handleAdd = () => {
		dispatch(add(countInput));
	};
	const handleSubtract = () => {
		dispatch(subtract(countInput));
	};
	return (
		<div className={styles.counterContainer}>
			<Button onClick={handleSubtract}>Subtract</Button>
			<input value={countInput} onChange={(e) => setCountInput(parseInt(e.target.value))} />
			<Button onClick={handleAdd}>Add</Button>
		</div>
	);
};

export default SubtractAdd;
