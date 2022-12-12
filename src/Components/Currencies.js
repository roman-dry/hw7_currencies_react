import React, { useEffect, useState } from "react";
import Currency from "./Currency";
import { Table } from 'react-bootstrap'
import Search from "./Search";

function Currencies() {
	const [currencies, setCurrencies] = useState([]);	
	const [filteredCurrencies, setFilteredCurrencies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
 
	useEffect(() => {
		fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20221211&json').then(res => res.json()).then(data => {
			console.log(data);
			setCurrencies(data.map(currency => ({
				r030: currency.r030,
				txt: currency.txt,
				rate: currency.rate,
				cc: currency.cc,
				active: false
			})))
		})
	}, [] )

	function updateCurrencyState(currencyName, activeState) {
		let result = [];
		for(let currency of currencies) {
		  if(currency.txt === currencyName) {
			 currency.active = activeState;
		  }
		  result.push(currency);
		}
		setCurrencies(result);
	 }

	function searchByCurrencyName(value) {
		setSearchValue(value);
		const result = currencies.filter(currency => currency.txt.toLowerCase().includes(value));
		setFilteredCurrencies(result);
	 }
	
	return <div>
		<Search searchByCurrencyName={searchByCurrencyName} />
		<Table striped bordered hover>
			<thead>
				<tr><th>Name</th><th>Rate</th><th>Code</th></tr>
			</thead>
			<tbody>
			{ (searchValue.length ? filteredCurrencies : currencies).map(currency => <Currency
					updateCurrencyState={updateCurrencyState}
					currency={currency} currencyTitle={currency.txt}
					key={currency.r030} />) }
			</tbody>
		</Table>
	</div>

}

export default Currencies;