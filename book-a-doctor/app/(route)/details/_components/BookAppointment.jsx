import React,{useState, useEffect} from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
  } from "@/components/ui/dialog"
  import Button from "@/components/ui/button"
  import { Calendar } from "@/components/ui/calendar"
  import CalendarDays, { Clock } from 'lucide-react'
  import { Textarea } from "@/components/ui/textarea"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import GlobalApi from '@/app/_utils/GlobalApi'



  

function BookAppointment({doctor}){
    const [date, setDate] =useState(new Date())
    const [timeSlot, setTimeSlot] = useState([])
    const [selectedTimeSlot, setSelectedTimeSlot] = useState();
    const [note, setNote] = useState();
    const {user}=useKindeBrowserClient();
    const isPastDay = (day) => day < new Date()

    useEffect(()=>{
        getTime()
    
    },[])

    const getTime=()=>{
        const timeList =[];
        for(let i = 10; i <= 12; i++){
            timeList.push({
                time: i + ':00 Am'
            })
            timeList.push({
                time: i + ':30 Am'
            })
        }

        for(let i = 1; i <= 6; i++){
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }
        setTimeSlot(timeList)
    }

    const saveBooking=()=>{
        const data={
            data:{
                UserName:user.given_name+''+user.family_name,
                Email:user.email,
                Time:selectedTimeSlot,
                Date:date,
                doctor:doctor.id,
                Note:note
            }
        }

        GlobaApi.saveBooking(data).then(resp=>{
            //console.log(resp.data)
            if(resp){
                GlobalApi.sendEmail(data).then(resp=>{
                    console.log(resp)
                })
                toast('Booking Comfirmation Was sent To an Email')
            }
        })

    }
    return(
        <Dialog>
  <DialogTrigger><Button className="mt-3 rounded-full">Book Appointment</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Book Appointment</DialogTitle>
      <DialogDescription>
        <div>
            <div className='grid grid-cols-1 md:grid-col-2 mt-5'>
                {/*Calendar */}
                <div className='flex flex-col gap-3 items-baseline'>
                    <h2 className='flex gap-2 items-center'>
                        <CalendarDays className='text-primary h-5 w-5'/>
                        Select Date</h2>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDay}
                    className="rounded-md border"
                />
                </div>

                {/*Time slot*/}
                <div className='mt-2 md:mt-0'>
                    <h2 className='flex gap-2 items-center mb-5'>
                        <Clock className='text-primary h-5 w-5'/>
                        Select Time Slot
                    </h2>
                    
                    <div className='grid grid-cols-3 gap-2 border rounded-full p-5'>
                        {timeSlot?.map((item, index)=>(
                            <h2 
                            onClick={()=> setSelectedTimeSlot(item.time)}
                            className={`p-2 border cursor-pointer rounded-full text-center hover:bg-primary hover:text-white ${item.time===selectedTimeSlot && 'bg-primary text-white'}`}>{item.time} key={index}</h2>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </DialogDescription>
    </DialogHeader>
    <Textarea placeholder="Type your message here." />
    <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <>
            <Button className='text-red-500 border-red' type="button" variant="outline">
              Close
            </Button>
            <Button type="button" disabled={!(date&&selectedTimeSlot)} onClick={()=>saveBooking()}>
              Submit
            </Button>
            </>
          </DialogClose>
        </DialogFooter>
  </DialogContent>
</Dialog>

    )
}

export default BookAppointment