import useLogin from '../hooks/useLogin'

const ProfilePage = () => {

const username = useLogin()

return(
    <>
    <h1>Ini Profile</h1>
    <h1>Username : {username}</h1>
    </>

)

}
export default ProfilePage;