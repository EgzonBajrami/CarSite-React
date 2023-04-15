const endpoints= {
    register:{url:'/users/register',method:'POST'},
    login:{url:'/users/login', method:'POST'},
    addCar:{url:'/cars/addCar', method:'POST'},
    addImage:{url:'/cars/add-image/', method:'POST'},
    getCars:{url:'/cars/getCars/', method:'GET'},
    setAppointment:{url:'/mails/appointment', method:'POST'},
    subscribe:{url:'/mails/subscribe', method:'POST'}
}
export default endpoints;