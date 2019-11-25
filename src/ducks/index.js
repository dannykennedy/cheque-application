const initialState = {
    payee: "",
    amount: null,
    date: new Date(),
    isSubmitted: false,
};

const actionTypes = {
    DATA_REQUEST: "DATA_REQUEST",
    DATA_SUCCESS: "DATA_SUCCESS",
    SUBMIT_FORM: "SUBMIT_FORM",
    SET_PAYEE: "SET_PAYEE",
    SET_DATE: "SET_DATE",
    SET_AMOUNT: "SET_AMOUNT",
    SET_SUBMITTED: "SET_SUBMITTED",
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

const dataRequest = () => {
    return { type: actionTypes.DATA_REQUEST };
};

const dataSuccess = payload => {
    return {
        type: actionTypes.DATA_SUCCESS,
        payload,
    };
};

export const submitForm = ({ amount, payee, date }) => {
    setAmount(amount);
    setDate(date);
    setPayee(payee);
};
