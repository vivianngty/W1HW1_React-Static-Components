//app, sidebar, reviews, average rating, sentiment analysis, website visitors
class App extends React.Component{
    render(){
        return (
            <div id="container">
                <Sidebar />
                <Reviews />
                <AverageRating />
                <SentimentAnalysis />
                <WebsiteVisitors />
            </div>
        )
    }
}

class Sidebar extends React.Component {
    render (){
        return (
            <div id="sidebar">
                <ul>
                    <li>Dashboard</li>
                    <li>Widget</li>
                    <li>Reviews</li>
                    <li>Customers</li>
                    <li>Online Analysis</li>
                    <li>Settings</li>
                </ul>
            </div>
        )
    }
}

class Reviews extends React.Component {
    render (){
        return (
            <div id="reviews">
                <p>Reviews</p>
            </div>
        )
    }
}

class AverageRating extends React.Component {
    render (){
        return (
            <div id="averageRating">
                <p>Average Rating</p>
            </div>
        )
    }
}

class SentimentAnalysis extends React.Component {
    render (){
        return (
            <div id="sentimentAnalysis">
                <p>Sentiment Analysis</p>
            </div>
        )
    }
}

class WebsiteVisitors extends React.Component {
    render (){
        return (
            <div id="websiteVisitors">
                <p>Website Visitors</p>
            </div>
        )
    }
}

ReactDOM.render ( 
    <App />, 
    document.getElementById('main') 
);