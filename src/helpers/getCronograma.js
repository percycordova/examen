export const getCronograma = async () => {

    const url = `https://servicios.inclubtest.online:2053/api/payment/schedule/vouchers/383`;
    const resp = await fetch(url);
    const { objModel: data } = await resp.json();
    const cronogramaDat = data.map((letra, i) => {
        return {
            description: letra.quoteDescription,
            expiration: letra.nextExpiration,
            quote: letra.quote,
            amortization: letra.amortization,
            capitalBalance: letra.capitalBalance,
            porcentaje: letra.porcentaje,
            interested: letra.interested,
            numberQuote: letra.numberQuotePay,
    
        }

    }

    );
    return cronogramaDat;
}