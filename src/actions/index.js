export const setChartData = (chartData) =>{
    return {
        type:"SET",
        data: chartData
    }
}

export const perFormLogin = () =>{
    return {
        type:"SIGN_IN"
    }
}

export const perFormLogout = () =>{
    return {
        type:"SIGN_OUT"
    }
}