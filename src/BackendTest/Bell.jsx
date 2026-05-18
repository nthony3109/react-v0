import { useState } from "react";

function Bell  ( {notification, connected, onClear} ) {
    
    const [open, setOpen] = useState(false);
    const unreadCount = notification.length
    const handleClick = ( ()=> {
        setOpen( 
            (prev) => !prev
        )
    } )

    return  (
            <div className="relative inline-block ">
                    <button 
                    onClick={ handleClick}
                    className=" text-2xl bg-none border-none cursor-pointer relative ">
                        {
                            unreadCount > 0 && (
                                <span className=" absolute -top-4 -right-4 bg-red-500 text-white rounded-full text-2 w-18 h-18 flex align-center justify-center ">
                                    {unreadCount}
                                </span>
                            )
                        }
                    </button>
                    { open && (
                        <div className=" absolute right-0 top-9 w-7xl max-h-400 overflow-y-auto bg-gray-900 border rounded-8 p-3.5 border-blue-900 z-1000 shadow-2xl shadow-indigo-500 "> 

                        </div>
                    ) }

            </div>
    )
}
export default Bell;