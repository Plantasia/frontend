import axios from "axios"

export const axiosFetcher = async url => await (await axios.get(url)).data
