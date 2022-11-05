import React from "react"

interface FormProps {
  children?: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>
}
const Form = ({ onSubmit, children }: FormProps)=>{

  return (    
    <form 
      onSubmit={onSubmit}
      className="flex dark:text-white flex-col max-w-2xl w-[95vw] rounded bg-white dark:bg-dark-bg p-5 gap-2">
      {children}
    </form>
)
}

export default Form
