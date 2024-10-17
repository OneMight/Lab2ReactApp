import CountrySelect from '../MaterialUI/AutocompleteInput/AutocompleteInput.jsx'
import Inputname from '../MaterialUI/Inputs/input.jsx'
import Button from '../MaterialUI/Button/button.jsx'
import  './RegistrationCon.css'

export default function RegistrationCon(){
    return(
        <main>
            <div className="Reg-con">
                <form action="registration" className='registration'>
                    <Inputname param ="Input name"/>
                    <Inputname param ="Input Surname"/>
                    <Inputname param ="Input Email"/>
                    <Inputname param ="Input Password"/>
                    <Inputname param ="Confirm password"/>
                    
                    <CountrySelect/>

                    <Button color='#FCF8F3' text ='Registration'/>
                </form>
            </div>
        </main>
    )
}