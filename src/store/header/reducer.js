import _state from './state';
export default (state = _state, action) => {
    let newState = { ...state };
    switch (action.type) {
        case "Focuse": newState.focused = true;
            break;
        case "Blur": newState.focused = false;
            break
    }
    console.log(newState)
    return newState
}