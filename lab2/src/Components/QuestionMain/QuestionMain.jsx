import AccordionMenu from '../MaterialUI/Accordionmenu/Accordionmenu'
import './QuestionMain.css'
export default function QuestionMain(){
    return(
        <main>
            <p className='title-text'>This section provides answers to frequently
                 asked questions from visitors to your future site.
                  Using this section will reduce the burden on
                  operators and increase the satisfaction of 
                  your customers.</p>
            <div className='table'>
                <AccordionMenu/>
            </div>
           
        </main>
    )
}