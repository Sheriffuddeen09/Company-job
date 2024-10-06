import axios from "axios";


const Api = axios.create({
baseURL:"http://localhost:3400/"
//baseURL:"https://company-json.onrender.com"
})

export const homesFetch = async () =>{
    const res = await Api.get("/homes")
    return res.data
}
export const RidersFetch = async () =>{
    const res = await Api.get("/rider")
    return res.data
}
export const welcomeFetch = async () =>{
    const res = await Api.get("/welcomes")
    return res.data
}
export const startupFetch = async () =>{
    const res = await Api.get("/startup")
    return res.data
}
export const templateFetch = async () =>{
    const res = await Api.get("/logistics")
    return res.data
}
export const oneFetch = async () =>{
    const res = await Api.get("/onelogistics")
    return res.data
}
export const twoFetch = async () =>{
    const res = await Api.get("/twologistics")
    return res.data
}
export const logFetch = async () =>{
    const res = await Api.get("/logs")
    return res.data
}
export const TechFetch = async () =>{
    const res = await Api.get("/technologys")
    return res.data
}
export const oneTechFetch = async () =>{
    const res = await Api.get("/onetechs")
    return res.data
}
export const twoTechFetch = async () =>{
    const res = await Api.get("/twotechs")
    return res.data
}
export const solutionFetch = async () =>{
    const res = await Api.get("/solutions")
    return res.data
}
export const companyFetch = async () =>{
    const res = await Api.get("/companys")
    return res.data
}
export const AccordFetch = async () =>{
    const res = await Api.get("/faqs")
    return res.data
}
export const reviewsFetch = async () =>{
    const res = await Api.get("/reviews")
    return res.data
}
export const reviewFetch = async () =>{
    const res = await Api.get("/review")
    return res.data
}