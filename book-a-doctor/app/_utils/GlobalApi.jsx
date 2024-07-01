const { default: axios } = require("axios");



const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
const axiosClient = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        Authorization: `Bearer ${API_KEY}` 
    }
})

const getCategory =()=> axiosClient.get('/categories?populate=*')
const getDoctors =()=> axiosClient.get('/doctors?populate=*')
const getDoctorsByCategory =(category)=> axiosClient.get('/doctors?filters[categories][Name][$in]='+category+"&populate=*");
const getDoctorsById =(id)=> axiosClient.get('/doctors/'+id+"?populate=*")
const bookAppointment =(data)=> axiosClient.post('/appointment',data)
const sendEmail=(data)=>axios.post('/api/sendEmail', data)
const getUserBookingList=(userEmail)=>axios.get('/appointment?filters[Email][$eq]='+userEmail+"&populate=*")
export default {
    getCategory,
    getDoctors,
    getDoctorsByCategory,
    getDoctorsById,
    bookAppointment,
    sendEmail,
    getUserBookingList
}