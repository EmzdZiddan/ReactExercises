import Button from '../Elements/Button/Index'
import {useContext} from 'react';
import {DarkMode} from '../../context/DarkMode'

const Navbar = (props) => {
    const {username,onLogout} = props;
    const {isDarkMode, setIsDarkMode}= useContext(DarkMode) 
    return(
    <div className='flex flex-row p-4 gap-10 items-center justify-end  bg-blue-900'>
        <div className="text-white text-bold">{username}</div>
        <Button type="button" width='w-fit' col='black' onClick={onLogout}>Logout</Button>
        <Button width='fit' onClick={() => setIsDarkMode(!isDarkMode) }>
        {isDarkMode ? 'Light' : 'Dark'}
        </Button>
    </div>
    )

}

export default Navbar;