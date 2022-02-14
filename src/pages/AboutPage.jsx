import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'
function AboutPage() {
    return (
        <Card>
            <div>
                <h1>About Page</h1>
                <p>This is an app for leaving reviews for a product</p>
                <p>version 1.0.0</p>
                
                <p>
                    <Link to='/'>Back to Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage
