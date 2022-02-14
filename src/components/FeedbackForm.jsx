import Card from "./shared/Card"
import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext.js'
import Button from "./shared/Button.jsx"
import RatingSelect from "./RatingSelect"

function FeedbackForm() {

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit===true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const [text, setText] = useState('')
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newFeedback = {
            text: text,
            rating: rating,
        }
        if (feedbackEdit.edit===true) {
            updateFeedback(feedbackEdit.item.id, newFeedback)
        }else {
            addFeedback(newFeedback)
        }
        setText('')
    }


    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        }else if (text !== '' && text.length<= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setBtnDisabled(false)
            setMessage(null) 
        }
        setText(e.target.value)
    }

    return (
        <Card>
            <form onSubmit = {handleSubmit}>
                <h2> How would you rate your experience</h2>
                <RatingSelect select = {(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input
                    onChange = {handleTextChange} type="text" 
                    placeholder = 'Write a review' value={text}/>
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm