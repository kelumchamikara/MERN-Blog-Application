import React, { useState } from 'react'
import AvatarProfile from '../images/AvatarProfile.png'
import { Link } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const Profile = () => {

const [avatar, setAvatar] = useState(AvatarProfile)
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [currentPassword,setCurrentPassword] = useState('')
const [newPassword,setNewPassword] = useState('')
const [confirmNewPassword,setConfirmNewPassword] = useState('')

  return (
    <section className='profile'>
      <div className='container profile__container'>
        <Link to={`/myposts/sdfsdf`} className='btn'>My posts</Link>

        <div className='profile__details'>
          <div className='avatar__wrapper'>
            <div className='profile__avatar'>
              <img src={AvatarProfile} alt=''/>
            </div>
            {/*From to update the avatar*/}
            <form className='avatar__form'>
              <input type='file' id='avatar' name='avatar' onChange={e =>setAvatar(e.target.files[0])} accept='image/png, image/jpeg, image/jpg' />
              <label htmlFor='avatar'><FaEdit/></label>
            </form>
            <button className='profile__avatar-btn'><FaCheck /></button>
          </div>

          <h1>Ernest Achiever</h1>

          {/*from to update user details*/}
          <form className='form profile__form'>
           <p className='form__error-message'>Error message</p>
           <input type='text' placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} />
           <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
           <input type='password' placeholder='Current Password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
           <input type='password' placeholder='New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)} />
           <input type='password' placeholder='Confirm  New Password' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
            <button type='submit' className='btn primary'>Update my details</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Profile
