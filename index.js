import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_Xq7qwcu5GcFBJ0axQZ3rpN9K8NHAELlwyHHnPmR9');


export async function currencyConverter(fromCurrency, toCurrency, units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multipiler = res.data[toCurrency];
    console.log(multipiler)
    return multipiler*units;
}

