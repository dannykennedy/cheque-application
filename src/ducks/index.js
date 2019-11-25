const initialState = {
    payee: "",
    amount: null,
    date: new Date(),
    isSubmitted: false,
    amountString: "",
};

const actionTypes = {
    DATA_REQUEST: "DATA_REQUEST",
    DATA_SUCCESS: "DATA_SUCCESS",
    SUBMIT_FORM: "SUBMIT_FORM",
    SET_PAYEE: "SET_PAYEE",
    SET_DATE: "SET_DATE",
    SET_AMOUNT: "SET_AMOUNT",
    SET_SUBMITTED: "SET_SUBMITTED",
    SET_AMOUNT_STRING: "SET_AMOUNT_STRING",
};

// STATE MACHINE
export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PAYEE:
            return {
                ...state,
                payee: action.payload,
            };
        case actionTypes.SET_DATE:
            return {
                ...state,
                date: action.payload,
            };
        case actionTypes.SET_AMOUNT:
            return {
                ...state,
                amount: action.payload,
            };
        case actionTypes.SET_SUBMITTED:
            return {
                ...state,
                isSubmitted: action.payload,
            };
        case actionTypes.SET_AMOUNT_STRING:
            return {
                ...state,
                amountString: action.payload,
            };
        default:
            return state;
    }
};

export const setPayee = payeeName => {
    return {
        type: actionTypes.SET_PAYEE,
        payload: payeeName,
    };
};

export const setAmount = amount => {
    return {
        type: actionTypes.SET_AMOUNT,
        payload: amount,
    };
};

export const setAmountString = amountString => {
    return {
        type: actionTypes.SET_AMOUNT_STRING,
        payload: amountString,
    };
};

export const setDate = date => {
    return {
        type: actionTypes.SET_DATE,
        payload: date,
    };
};

export const setSubmitted = isSubmitted => {
    return {
        type: actionTypes.SET_SUBMITTED,
        payload: isSubmitted,
    };
};

export const submitForm = ({ amount, payee, date }) => {
    setAmount(amount);
    setDate(date);
    setPayee(payee);
};

export const getAmountString = amount => {
    return dispatch => {
        fetch(
            `https://te5299oebg.execute-api.us-west-2.amazonaws.com/prod/${amount}`,
            {
                method: "GET",
            }
        )
            .then(data => data.text())
            .then(json => {
                dispatch(setAmountString(json));
            })
            .catch(err => {
                console.log(err);
            });
    };
};
