import React from "react";

function Currency({currency,currencyTitle, updateCurrencyState}) {
	return <tr
	onClick={() => updateCurrencyState(currency.txt, !currency.active)}
	title={currencyTitle}
	className={currency.active ? 'bg-warning' : ''}
>
	<td>{currency.txt}</td>
	<td>{currency.rate}</td>
	<td>{currency.cc}</td>
</tr>

}

export default Currency;