import {FaEdit, FaTimes} from 'react-icons/fa'
import React from 'react'
import Card from './shared/Card.jsx'
import { useContext } from "react"
import FeedbackContext from '../context/FeedbackContext.js'
import {motion, AnimatePresence} from 'framer-motion'

function  FeedbackItem({item}) {

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

 
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button 
            onClick= {() => deleteFeedback(item.id)}
            className="close">
                <FaTimes color='purple'/>
            </button>
            <button 
            className="edit"
            onClick = {() => editFeedback(item)}>
                <FaEdit color= 'purple'></FaEdit>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedbackItem
