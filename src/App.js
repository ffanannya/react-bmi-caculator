import React, {useState} from "react";

function App() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');
    const resultBMI = (e) => {
        e.preventDefault();
        let tempWeight = parseFloat(weight);
        let tempHeight = parseFloat(height);

        if (!(tempHeight > 0 && tempWeight > 0)) {
            return;
        }

        const bmi = (tempWeight / (tempHeight ** 2)).toFixed(2);
        setBmi(bmi);
    }

    let result = bmi > 30 ? 'Obese' : (
        bmi < 30 && bmi > 25 ? 'Overweight' : (
            bmi < 25 && bmi > 18 ? 'Healthy' : (
                bmi < 18 && bmi > 0 ? 'Underweight' : null
            )
        )
    );

    return (
        <div className="App container border border-dark rounded d-flex flex-wrap flex-column align-items-center justify-content-center my-5 pt-4 w-25 bg-secondary">
            <p className="h4 bg-secondary text-white px-3 py-3 rounded mb-4 ">BMI (Body Mass Index) Calculator</p>
            <form className="form-group">
                <div>
                    <label className="font-weight-bold text-white">Height in meter:</label>
                    <input className = "form-control" placeholder = "Enter your height" value = {height} onChange={(e) => setHeight(e.target.value)}></input>
                </div>
                <div>
                    <label className="pt-3 font-weight-bold text-white">Weight in kg:</label>
                    <input className = "form-control" placeholder= "Enter your weight" value = {weight} onChange={(e) => setWeight(e.target.value)}></input>
                </div>
            </form>

            <button type="submit" className="btn btn-success mt-2 border border-dark roubded font-weight-bold" onClick={resultBMI}>Submit</button>
            <p className="mt-3 h3 text-white">Your current BMI: {bmi}</p>
            <div className="mb-3 h2 text-white font-weight-bold">{result ? result + '!' : result}</div>
        </div>
    );
}

export default App;
