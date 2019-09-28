const BASE_URL = 'https://pyghack.zuggr.com/'

var data = {
    user: null,
    coupon: null
}

const requests = {
    user: {
        async login(data) {
            var response = await axios(
                {
                    method: 'POST',
                    url: BASE_URL + 'passprt/login',
                    data: data
                }
            )

            data.user = response.data
        },
        async register(data) {
            var response = await axios(
                {
                    method: 'POST',
                    url: BASE_URL + 'passport/register',
                    data: data
                }
            )
        }
    },
    coupon:{
        async register(data){
            var response = await axios(
                {
                    method: 'POST',
                    url:BASE_URL+'coupon/register',
                    data:data
                }
            )
            
            data.coupon = response.coupon
        },
        async view(data, id){
            var response = await axios(
                {
                    method: 'POST',
                    url:BASE_URL+'coupon/' + id,
                    data:data
                }
            )
            
            data.coupon = response.coupon
        },
        async consume(data){
            var response = await axios(
                {
                    method: 'PUT',
                    url:BASE_URL+'coupon/consume',
                    data:data
                }
            )
            
            data.coupon = response.coupon
        },
        async index(data){
            var response = await axios(
                {
                    method: 'PUT',
                    url:BASE_URL+'coupon',
                    data:data
                }
            )
            
            data.coupon = response.coupon
        },
    }
}
