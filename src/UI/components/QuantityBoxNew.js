import { useState } from "react";

const QuantityBoxNew = (props) => {

	const [quantity, setQuantity] = useState(props.quantity);

	const onChangeQuantity = (e) => {
		setQuantity(e.target.value);
		props.onChangeQuantity(e.target.value);
	}

	const onSubtractQuantity = (e) => {
		e.preventDefault();
		const qty = parseInt(quantity, 10);
		const min = 1;
		if (quantity > min) {
			setQuantity(qty - 1);
			props.onChangeQuantity(qty - 1);
		}
	}

	const onAddQuantity = (e) => {
		e.preventDefault();
		const qty = parseInt(quantity, 10);
		if (qty < 99) {
			setQuantity(qty + 1);
			props.onChangeQuantity(qty + 1);
		}
	};



	return (
		<div className="quantity-box d-flex">
			<button
				className="input-group-text bg-transparent border-end-0 rounded-lg rounded-right-0 border-dark flex-grow-0"
				type="button"
				aria-label="Add Subtract"
				onClick={onSubtractQuantity}
				data-cy="cart-subtract-quantity-icon"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="svg"><path d="M17.543 11.029H2.1A1.032 1.032 0 011.071 10c0-.566.463-1.029 1.029-1.029h15.443c.566 0 1.029.463 1.029 1.029 0 .566-.463 1.029-1.029 1.029z"></path></svg>
			</button>
			<input
				type="number"
				name='quantity'
				className="form-control border-start-0 border-end-0 rounded-0 p-0 text-center flex-grow-0 bg-transparent text-body border-dark font-size-dt-lg"
				value={quantity}
				defaultValue={quantity}
				onChange={onChangeQuantity}
			/>
			<button
				className="input-group-text bg-transparent border-start-0 rounded-lg rounded-left-0 border-dark flex-grow-0"
				type="button"
				aria-label="Add Quantity"
				disabled={false}
				onClick={onAddQuantity}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="svg"><path d="M17.409 8.929h-6.695V2.258c0-.566-.506-1.029-1.071-1.029s-1.071.463-1.071 1.029v6.671H1.967C1.401 8.929.938 9.435.938 10s.463 1.071 1.029 1.071h6.605V17.7c0 .566.506 1.029 1.071 1.029s1.071-.463 1.071-1.029v-6.629h6.695c.566 0 1.029-.506 1.029-1.071s-.463-1.071-1.029-1.071z"></path></svg>
			</button>
		</div>
	);
}

export default QuantityBoxNew;
