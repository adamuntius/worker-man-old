import logo from './logo.svg';
import './App.css';
import Background from './components/Background.js';

function App() {
  return (
    <div classNameName="App">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous" />
      <Background />
      <div className="main-wrapper">
        <div className="expenses-block">
          <h1>Expenses</h1>
        </div>
        <div className="market-block">
          <div className="market-wrapper">
            <h1>Market</h1>
            <div className="stock-one market-btn" id = "market0">
              <div className = "security">10</div>
              <span className = "ticker"></span>
            </div>
            <div className="stock-two market-btn" id = "market1">
              <div className = "security">10</div>
              <span className = "ticker"> </span>
            </div>
            <div className="stock-three market-btn" id = "market2">
              <div className = "security">10</div>
              <span className = "ticker"> </span>
            </div>
            <div className="stock-four market-btn" id = "market3">
              <div className = "security">10</div>
              <span className = "ticker"> </span>
            </div>
            <div className="bond-one market-btn" id = "market4">
              <div className = "security">10</div>
              <span className = "ticker"></span>
            </div>
            <div className="bond-two market-btn" id = "market5">
              <div className = "security">10</div>
              <span className = "ticker"> </span>
            </div>
          </div>
        </div>
        <div className="passive-income-block">
          <h1>Passive Income</h1>
          <div id = "passive-income-list">
          </div>
        </div>
        <div className="upgrade-block">
          <h1>Upgrades</h1>
          <div className="work-experience label">Work EXP: </div>
          <div className="btn work-speed-upgrade">Upgrade Work Speed</div>
          <div className="btn raise">Get a Raise</div>
          <div className="btn buy-education">Further Your Education</div>
        </div>
        <div className="center-block" id = "center-block">
          <div className="center-wrapper">
            <div className="work">
              <h1 className = "heading">Work</h1>
              <div className="small-label-container">
                <div className="small-label work-speed">Work Speed</div>
                <div className="small-label marginal-work-exp">Work EXP Per Completion</div>
              </div>
              <div className = "worktext-container btn">
                <span className="worktext">Work</span>
                <i className="fa fa-briefcase"></i>
              </div>
              <div className="block"></div>
              <div className="cash-per-work">10$ per completion</div>
            </div>
            <div className="education">
              <h1 className = "heading">Education</h1>
              <div className="education-level small-label">Education Level: </div>
              <div className = "learn-container btn">
                <span className="learn-btn">Learn</span>
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="learn-slider"></div>
              <div className="education-progress">Education Progress: </div>
            </div>
          </div>
        </div>
        <div className="portfolio-block">
          <h1>Portfolio</h1>
          <div className="cash label">Cash</div>
          <div className="stocks label">
            <div id="stocks-text">Stocks</div>
            <i id = "manage-stocks-button" className="fa fa-bars inline-button"></i>
          </div>
          <div className="bonds label">Bonds</div>
          <div className="real-estate label">Real Estate</div>
        </div>
        <div className="information-block">
          <div className="date">
            Year: 1, Month: 1
          </div>
          <div className="user">
            Adamuntius
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>

  );
}


export default App;
