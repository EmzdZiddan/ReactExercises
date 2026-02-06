import { PlusCircle, ArrowRight } from 'lucide-react';


const Button = (props) => {
    const {type,children,onClick, col='blue',width='full', rightIcons='arrowRight'} = props;

    const btnCol = {
        red : 'bg-red-700',
        green : 'bg-green-700',
        blue : 'bg-blue-700',
        black : 'bg-black'
    };

    const icons = {
        plusCircle :PlusCircle,
        arrowRight : ArrowRight
    }

   const IconComponenet = icons[rightIcons]


    return (
    <button  className={`${btnCol[col]} w-${width} rounded-lg px-4 py-2 text-white shadow-2xl flex gap-2 items-center justify-center`}
    onClick={onClick} type={type}>
        {children}
       {IconComponenet && <IconComponenet className='w-4 h-4'/>}
    </button>
  );
};
export default Button;
