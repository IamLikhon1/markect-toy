import { useEffect } from "react";

const UseTitle = (title) => {
    useEffect(()=>{
        document.title=`Toys Car World | ${title}`
    },[title])
    return (
        <div>
            
        </div>
    );
};

export default UseTitle;