
import React, { useEffect, useState } from 'react'
import './page4.css';



const Page4=()=>{

    const [Mainpage, setMainpage] = useState([])
    let arr=[]

    const[input1,setinput1]=useState()
    const[input2,setinput2]=useState()
    const[button1,setbutton1]=useState()
    const[button2,setbutton2]=useState()
    const[voting,Setvoting]=useState(0)
    const posts = [
        {
            postedBy: "Kunal",
            postText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            upVotes:3,
                    downVotes:1
        },
    ];


            arr.push({
                postedBy: button1,
                postText:button2,
            })  
            localStorage.setItem(input1,input2)
            
            // function buttononclick(e){
            //     e.preventDefault()
            //         setbutton1(input1)
            //         setbutton2(input2)
            //         localStorage.setItem(input1,input2)
               
            //    console.log(arr)
            //    }

               function upvote(){
                Setvoting(voting+1)
               }
               function downvote(){
                Setvoting(voting-1)
               }

           
    return(
        <div className="badaDiv">
        <div className="mainpage">
            <form className="form" >
            <div>
            <input className="maintitle"  type="text" placeholder='Title' onChange={(e)=>{
                setinput1(e.target.value)
            }} />
            </div><br></br>
                <div>
                <p>post title:</p>
                <p className="textarea" onChange={(e)=>{
                setinput2(e.target.value)
            }}>application of the mind to the acquisition of knowledge, as by reading, investigation, or reflection: long hours of study.</p>
                </div>
                
                <img className='imgpost' src="https://thumbs.dreamstime.com/b/kids-education-child-boy-study-school-thinking-bubble-dreaming-over-black-chalkboard-75214276.jpg"></img>
            
                <div className='imgflex' >
                <div className='downimge'>
                <div>
                    <img className='upvoting' onClick={upvote} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHF-JQd5tZc2Gy1zWTo0-ELmbTQvyx2uUseA&usqp=CAU"></img>
                    </div>
                    </div>
                    {/* <div>
                <img className='imgpost' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"></img>
                </div> */}
                    <div className='voting'>
                    <span>{voting}</span>
                    </div>
                    
                    <div>
                    <img  className='downvoting' onClick={downvote}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjCZpGDP-GNZQ9I-ZuH2CMcZH7lUgCoofZQ&usqp=CAU"></img>
                  </div>
                  </div>
                  
                  
                
                    
                {/* <button className='savebutton' onClick={buttononclick}>save</button> */}
                
            </form>
        </div>
        </div>
        

        
    )
}
export default Page4;