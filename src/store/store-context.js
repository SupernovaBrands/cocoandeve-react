import React from "react";

const StoreContext = React.createContext({
    range: '',
    store: '',
    productCardCta: '',
    storeChange: (activeStore) => {},
    rangeChange: (range) => {},
});

export default StoreContext;