import { useState } from 'react';

type fn = () => void

const useToggle = (defaultValue: boolean) : [boolean, fn, string] => {
	const [value, setValue] = useState(defaultValue);

	const toggleValue = () => {
		setValue(!value);
	};

	const valueClass = value ? 'positive' : 'negative';

	return [value, toggleValue, valueClass];
};

export default useToggle
