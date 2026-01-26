
const Test = () => {

    const fungsiAlert = () => {
        alert("Ini Adalah Alert");
    }
    
  return(
    <>
    <div className="bg-gray-800 flex flex-col items-center h-screen">
        <button onClick={fungsiAlert}
        className="bg-blue-600 flex items-center justify-center text-lg text-white text-bold rounded-xl px-3 py-2">
        Klik Disini
        </button>
    </div>
    </>
  )

}
export default Test;