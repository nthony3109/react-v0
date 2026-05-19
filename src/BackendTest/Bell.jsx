import { useState } from "react";
import NoticationItems from "./NotificationItems";

function Bell  ( {notifications, connected, onClear} ) {
    
    const [open, setOpen] = useState(false);
    const unreadCount = notifications.length
    const handleClick = ( ()=> {
        setOpen( 
            (prev) => !prev
        )
    } )

    return  (
            <div className="relative inline-block ">
                    <button 
                    onClick={ handleClick}
                    className=" text-2xl bg-none border-none cursor-pointer relative ">  🔔
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
                            <div className=" flex  justify-between mb-5  ">
                               <strong>Notifications</strong>
                               {
                                unreadCount> 0 && (
                                    <button onClick={onClear} className="text-2xl cursor-pointer" > clear all</button>
                                )
                               }
                                  </div>
                                  {
                                    notifications.length ===0 ? ( 
                                        <p className=" text-amber-200 align-center  "> No Notification yet</p>
                                    ) : (
                                        notification.map((n,i) => (<NoticationItems key={i}{...n} />))
                                    )
                                  }


                        </div>
                    ) }
                  <span style={{ fontSize: "0.7rem", color: connected ? "green" : "red", marginLeft: 6 }}>
                          {connected ? "● Live" : "● Disconnected"}
      </span>

            </div>
    )
}
export default Bell;