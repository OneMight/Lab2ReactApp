import './UsersComponent.css'
import { useState } from 'react';
import { useSelector ,useDispatch } from 'react-redux'
import {useTranslation} from "react-i18next";

import { addUser, removeUser,} from '../../store/actions/usersSlicer'

export default function UsersComponent(){
    const {t} = useTranslation ();
    const dispatch = useDispatch();
    const [getinputUser, setinputUser] = useState('');
    const [filterUser, setFilterUsers] = useState([]);
    const Users = useSelector(state => state.users.items)
    const HandlegetInput =(e) =>{
        if(e.target.value.length > 30){
            alert(t('Users.You have max'))
        }
        else{
            setinputUser(e.target.value)
        }
        
    }
    const AddUser = () =>{
        if(!getinputUser || getinputUser.length === 0){

           alert(t('Users.You dont fill field'))  
        }
        else if (Users.some(user =>
            user.name.toLowerCase().includes(getinputUser.toLowerCase()))) {
            alert(t('Users.User is already added')); 
        }
        else{
            dispatch(addUser({name: getinputUser}))
            
        }
    }
    const DeleteUser =(user) =>{
        dispatch(removeUser({name: user.name}))
    }
    const SortByName =() =>{
        const sortedUsers = [...Users].sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        setFilterUsers(sortedUsers)
     
    }


    return(
    <main>
        <div className='lorem-div'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt nulla accusamus nisi esse quos quas, dicta, deserunt quo eveniet suscipit ipsum nobis. Autem nihil iusto, reiciendis ducimus illo quae id.</p>
        </div>
        <div className='Users'>
            <div className='Options'>
                <input type="text" onChange={HandlegetInput} placeholder={t('Users.Input name of user')}/>
                <button className='Add-user' onClick={()=> AddUser()}>{t('Users.Add user')}</button>
                <button className='Add-user sort-button' onClick={()=> SortByName}>{t('Users.Filter by name')}</button>
            </div>
           
            {(!Users || Users.length ===0) ?(
                <p className='Users-not-added'>{t('Users.User not added')}</p>
            ):(
            <div className='Users-div'>
               
                    {Users.map(user =>(
                        <div className='User-box' key={user.id}>
                            <p>{t('Users.Nameofuser')}: {user.name}</p>
                            <div className='Users-buttons'>
                                <button className='button-for-admin' onClick={()=>DeleteUser(user)}>{t('Users.Delete')}</button>
                                <button className='button-for-admin'>{t('Users.Redact')}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            
            )
            }
        </div>
    </main>
    )

}