import React from 'react'
import '../About.css'
import Footer from '../Footer'

export default function About() {
    return (
        <div>
            <h1>About Me:</h1>
           <p className="p1">  Recent graduate from the University of Utah in Full stack web development. Fell in love with development. Taught the full MERN stack, along with other skills such as MySQL, Hanldebars, jQuery, Css, Postman and Html. Knowledgable in design principles, proficient in Adobe Photoshop and Illustrator. Self-driven quick learner always eager to progress in my code. Willing to learn any technology and bring value to the team.</p>

            <h2>More Personally:</h2>
            <p className="p2"><br></br>Aside from programming I have a strong passion for playing music, outdoor adventures, and designing clothing! With my free time I usually work on projects such as; gardening, woodwork, and music production. I'm always excited about the next challenge in life, and ready to take anyting on head first!
           </p>
           <Footer/>
        </div>
    )
}
