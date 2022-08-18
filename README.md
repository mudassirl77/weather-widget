<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Weather Widget</h3>

  <p align="center">
    This is a small weather widget component built using React. It displays current weather data from <a href="https://openweathermap.org/api">OpenWeatherMap API</a>.
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#environment-setup">Environment Setup</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#integration-with-applications">Integration with Applications</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

It is a React Component Library built for educational purposes. It displays current weather data for a selected city. Information like temperature, weather condition, humidity, wind and pressure.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* ![React][React.js]
* ![TypeScript][TypeScript]
* ![Jest][Jest]
* ![Webpack][Webpack]
* ![Eslint][Eslint]
* ![VsCode][VsCode]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To setup the project locally, please follow the instructions below.

### Prerequisites

Please make sure that you have Node Package Manager or yarn installed.<br>
I have used <strong>npm</strong>. 
* Install latest npm version
  ```sh
  npm install npm@latest -g
  ```

### Environment Setup

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api) and [RapidAPI](https://rapidapi.com/) to get free APIs key.<br><br>
Please Note:

- RapidAPI is used to get latitude and logitude of cities that will be used for our autocomplete search field
- OpenWeatherMap is used to get the current weather data for the chosen city using the latitude and longitude from RapidAPI

2. Clone the repo
   ```sh
   git clone https://github.com/mudassirl77/weather-widget.git
   ```
3. Navigate to root folder directory of widget and install NPM packages using
   ```sh
   npm install
   ```
4. Enter the API Keys in `api.ts`
   ```ts
    export const RAPID_API_KEY = '<RAPID_API_KEY>';

    export const WEATHER_API_KEY = '<WEATHER_API_KEY>';
    ```
5. Start the project locally
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
The widget is simple to use.
1. Type your city name in the autocomplete search field and select the right one from the list.
2. Once you have chosen your city, the current weather data for that particular city will be displayed.
3. In the header, you will see that we have a numeric text field. This sets the refresh interval. The default value is 30 seconds. Enter the value in seconds in the field to change the refresh interval.
4. You can use the toggle to switch between dark and light mode.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Integration in applications
This widget is a React Component Library and has been built using Webpack, ensuring compatibility with CommonJS and ES modules.<br>

Please note that this widget only works with React applications with version  > 16.8 for now.

To integrate in another React application locally, navigate to the root folder of this widget and<br />
1. Build package for production using
   ```sh
   npm run build
   ```
2. To avoid errors that React can throw when consuming the widget locally, we have to share the same react package between the widget and your app.<br>Run the following command to use the React version used by your app.
   ```sh
   npm link ./<path of your app>/node_modules/react
   ```
3. Next, create a link back to this widget using
   ```sh
   npm link
   ```
4. Now, navigate to your application root folder and run
   ```sh
   npm link weather-widget
    ```
5. Use the widget anywhere in your application using the selector
    ```js
   <WeatherWidget />
    ```
6. Start your application
    ```sh
   npm start
    ```

<p>That's it! You are done.</p>
<p> The widget can be later published to npm registry.<p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Mudassir Lallmahamood - mudz1705@hotmail.com

Project Link: [https://github.com/mudassirl77/weather-widget](https://github.com/mudassirl77/weather-widget)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Invalid Hook Call](https://iws.io/2022/invalid-hook-multiple-react-instances)
* [Bas Dev for icons](https://bas.dev/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-url]: www.linkedin.com/in/mudassir-lallmahamood-309834171
[product-screenshot]: images/screenshot.png
[Webpack]: https://badges.aleen42.com/src/webpack.svg
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[TypeScript]: https://badges.aleen42.com/src/typescript.svg
[Jest]: https://badges.aleen42.com/src/jest_2.svg
[VsCode]: https://badges.aleen42.com/src/visual_studio_code.svg
[Eslint]: https://badges.aleen42.com/src/eslint.svg


