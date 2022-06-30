import { useReducer } from "react";
import StoreContext from "./store-context";

let store = {
    store: 'us',
    range: 'tan',
}

const storeReducer = (state, action) => {
    if (action.type === 'CHANGESTORE') {
        store.store = action.changeValue
    }

    if (action.type === 'CHANGERANGE') {
        store.range = action.changeValue
    }

    return store;
};

const StoreProvider = props => {
    
    const [storeState, dispatchStoreAction] = useReducer(storeReducer, store);
    const storeChangeHandler = (activeStore) => {
        console.log('sss', activeStore)
        const store = ['us', 'fr', 'de'].includes(activeStore) ? activeStore : 'us';
        dispatchStoreAction({type: 'CHANGESTORE', changeValue: store})
    };

    const rangeChangeHandler = (range) => {
        console.log('dd', range)
        dispatchStoreAction({type: 'CHANGERANGE', changeValue: range})
    };

    const storeContext = { ...storeState, storeChange: storeChangeHandler, rangeChange: rangeChangeHandler };


    return (
        <StoreContext.Provider value={storeContext}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
