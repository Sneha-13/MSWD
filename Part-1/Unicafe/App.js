import React, {useState} from 'react';


const Statistic = (props) => {
    return (
        <p>{props.text} {props.value}</p>
    )
}

const Statistics = (props) => {
    const all = props.Good + props.Bad + props.Neutral
    const average = (props.Good + (props.Bad*-1))/all
    const positive = (props.Good)/all *100
    if(all===0){
        return (
            <p>No Feedbacks given</p>
        )
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><Statistic text="Good" value={props.Good} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Neutral" value={props.Neutral} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Bad" value={props.Bad} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="all" value={all} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="average" value={average} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="positive" value={positive} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.event}>{props.text}</button>
    )
}
const App = () => {
    const [Good, setGood] = useState(0)
    const [Neutral, setNeutral] = useState(0)
    const [Bad, setBad] = useState(0)

    
    return (
        <div>
            <h1> Dear Customer,Please Give Your Valuable Feedback </h1>
            <div>
                <Button event={()=> setGood(Good+1)} text="Good" />
                <Button event={()=> setNeutral(Neutral+1)} text="Neutral" />
                <Button event={()=> setBad(Bad+1)} text="Bad" />
                                
            </div>
            <h2>Statistics</h2>
            <Statistics Good={Good} Bad ={Bad} Neutral={Neutral} />
        </div>
    )
}



export default App