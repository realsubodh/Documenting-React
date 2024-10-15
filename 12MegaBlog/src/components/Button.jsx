import React from "react";

function Button({ 
    children,
    type ="button",
    bgColor = 'bg-blue-600',
    textColor ='text-white',
    className ='',
    ...props  // this method is called props spreading which is used to add additional things that can be passed by user in the component

 }) { // don't get confused with children it is nothing but just only a name

    // prod way of writing code
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} {...props}`}>  
        {children} 
    </button>
  )
}

export default Button;
