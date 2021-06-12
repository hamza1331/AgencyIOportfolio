/**
 *  Filter Data Reducers
 */
export default (state = {category: [],size:[],color: [], ratings:"",value: { min: 0, max: 15000 },search:"",sortOrder: ""}, action) => {
    if(action.type == "GET__PRODUCT_CATEGORY")
    {
        return {
            ...state,
            category: action.category
        };
    }
    else if(action.type == "GET_PRODUCT_SIZE")
    {
        return {
                    ...state,
                    size: action.size
                };
    }
    else if(action.type == "GET_PRODUCT_COLOR")
    {
     return {
                ...state,
                color: action.color
            };
    }
    else if(action.type == "GET_MIN_MAX_PRICE")
    {
        return {
                    ...state,
                    value: {min: action.value.value.min, max: action.value.value.max }
                };
    }
    else if(action.type == "TOP_BAR_FILTER")
    {
        return {
            ...state,
            sortBy: action.sort_by
        };
    }
    else
    {
        return state;
    }    
}