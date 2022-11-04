import { useCreateCourse } from "@gql/hooks/mutations"
import React from "react"
import { useCreateCourseRefs } from "./utils"

interface FormProps {
  close: ()=>void
}

const CreateCourse = ({close}:FormProps)=>{
  const courseRefs = useCreateCourseRefs()
  const { createCourse, loading } = useCreateCourse()

  const createCourseHandler: React.FormEventHandler = (event) => {
    event.preventDefault()
    createCourse(courseRefs)
    close()
  }

  if (loading){
    return <div>Loading...</div>
  }
  return (
    <form 
      onSubmit={createCourseHandler}
      className="flex dark:text-white flex-col max-w-2xl w-[95vw] rounded bg-white dark:bg-dark-bg p-5 gap-2">
      <div className="flex-col flex gap-3">
        <div className="flex flex-col">
          <label className="" htmlFor="name">Course name</label>
          <input 
            ref={courseRefs.nameRef}
            className="bg-dark-accent/30 w-full shadow focus:shadow focus:shadow-dark-accent transition-all outline-none rounded-lg p-2"
            type='text' id="name" placeholder="Gel 321 (Metamorphic petrology)" />
        </div>
        <div className="flex flex-col">
          <label className="" htmlFor="description">Description</label>
          <textarea
            ref={courseRefs.descRef}
            rows={7}
            className="bg-dark-accent/30 w-full shadow focus:shadow focus:shadow-dark-accent transition-all outline-none rounded-lg p-2"
            id="description" placeholder="The study of metamorphic rocks..." />
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex flex-col">
            <label className="" htmlFor="start-date">Start date</label>
            <input
              ref={courseRefs.startRef}
              className="bg-dark-accent/30 w-full shadow focus:shadow focus:shadow-dark-accent transition-all outline-none rounded-lg p-2"
              type='date' id="start-date" />
          </div>
          <div className="flex flex-col">
            <label className="" htmlFor="end-date">End date</label>
            <input
              ref={courseRefs.endRef}
              className="bg-dark-accent/30 w-full shadow focus:shadow focus:shadow-dark-accent transition-all outline-none rounded-lg p-2"
              type='date' id="end-date" />
          </div>
        </div>
      </div>
      <button className="bg-primary hover:bg-primary/70 dark:bg-secondary p-2 text-dark-accent transition-all rounded-md dark:hover:bg-blue-200" type="submit">Save</button>
    </form>
  )
}

export default CreateCourse
