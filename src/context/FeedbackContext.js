 import { createContext, useState } from 'react'
 import {v4 as uuidv4} from 'uuid'


 const FeedbackContext = createContext()

 export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id:1,
            text: 'this is feedback item 1 from context',
            rating: 10
        },
        {
            id:2,
            text: 'this is feedback item 2 from context',
            rating: 9
        },
        {
            id:3,
            text: 'this is feedback item 3 from context',
            rating: 7
        }
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id===id ? {...item,...updItem} : item))
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedback(feedback.filter((item) => item.id!==id))
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id=uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback,...feedback])
    }


    return <FeedbackContext.Provider value ={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>

 }

 export default FeedbackContext