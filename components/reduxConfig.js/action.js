export const SET_LAT = 'SET_LAT';
export const SET_LONG = 'SET_LONG';

export const setLat = lat =>dispatch=>{
    dispatch({
        type:SET_LAT,
        payload:lat
    })
}
export const setLong = long =>dispatch=>{
    dispatch({
        type:SET_LONG,
        payload:long
    })
}