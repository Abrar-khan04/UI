import React from 'react'
import Section1 from './components/section1/section1'


const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:' ',
      color:'lightblue', 
      tag:'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661301073759-763be51674f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:' ',
      color:' LightGreen',
      tag:'UnderServed'
    },
    {
      img: 'https://media.istockphoto.com/id/1352741591/photo/happy-young-arab-businessman-in-formal-wear-working-with-laptop-computer-at-his-desk-in-office.jpg?s=612x612&w=is&k=20&c=qJGlyj-TQE8oXcWshwHsmKqp_wI48xnT7hptZXYaFmk=',
      intro:' ',
      color:' blue',
      tag:'Underbanked'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      intro:' ',
      color:' lightpink',
      tag:'UnderRobed'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:' ',
      color:' brown',
      tag:'Unserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1724627559656-9652a42c7e91?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:' gray',
      tag:'bankless'
    }
  ]

  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App
