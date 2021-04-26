import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    state = {
        status: "Off",
        time: 0,
        timer: null,
    }

    formatTime = (time) => {
        let seconds = time%60;
        let minutes = Math.floor(time/60);
        if(seconds < 10)seconds = '0' + seconds;
        if(minutes > 10)minutes = '0' + minutes;
        return minutes + ':' + seconds;

    }



    render() {
        const { status } = this.state;
        return (
            <div>
                {(this.state.status === 'off') && <div>
                    <h1>Protect your eyes</h1>
                    <p>According to optometrists in order to save your eyes, you should follow the 20/20/20. It means you should to rest your eyes every 20 minutes for 20 seconds by looking more than 20 feet away.</p>
                    <p>This app will help you track your time and inform you when it's time to rest.</p>
                </div>}
                {(status === 'work') && <img src="./images/Work.png" />}
                {(status === 'rest') && <img src="./images/Rest.png" />}
                {(status !== 'off') && <div className="timer">{this.formatTime(this.state.time)}</div>}
                {(status === 'off') && <button className="btn">Start</button>}
                {(status !== 'off') && <button className="btn">Stop</button>}
                <button className="btn btn-close">X</button>
            </div>
        )
    };
}

render(<App />, document.querySelector('#app'));
