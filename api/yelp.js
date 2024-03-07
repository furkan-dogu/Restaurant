import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer wN9PttN71M-qQfpG5pwHfc6ylqe9DHpUuzNsdpnbai0RPmSpAmfewSmTUtiMQKfuN48_EpuGabRX3LEPKJ8BgFaU1D1aLJhBp5NOd-7kEuHmvNM0jPvyHtjcosXlZXYx"
    }
})