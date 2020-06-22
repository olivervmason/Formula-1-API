<h1>Formula 1 API mini-project</h1>

<h3>Project purpose</h3>
<p>This project was done to learn about how to use Javacript to recall information from an external API.</p>

<h3>Technology and other resources used</h3>

<ul>
    <li>Vanilla Javascript</li>
    <li>Axios, a promise based HTTP client for the browser and node.js</li>
    <li>An independent third party API repository of motor racing data called Ergast</li>
    <li>Bootstrap for CSS styling</li>
</ul>

<h3>What the app does</h3>

<p>The application takes in two parameters from a user, a year (from 1950 onwards, when the F1 World Championship began) and an event number.

Javascript then calls the Ergast API and returns information about the event venue (host country, track name, and race distance) plus a list of the top 10 finishers.

For events from 1994 onwards, the pole position information is also available.</p>

<h3>Limitations</h3>

<p>The app can be quite slow to respond and update.

Pole position data is not available for years prior to 1994. This field will not update to show a blank if an event with that information has previously been queried. </p>