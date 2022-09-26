const initState = {
    search: '',
    status: 'All',
    priority: [],
}

const filtersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'filer/searchFilterChange':
            return {
                ...state,
                search: action.payload,
            };
        case 'filer/statusFilterChange':
            return {
                ...state,
                status: action.payload,
            };
        case 'filer/priorityFilterChange': 
            return {
                ...state, 
                priority: action.payload,
            }
        default:
            return state;
    }
}

export default filtersReducer;
