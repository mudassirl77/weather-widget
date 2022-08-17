const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: path.resolve(
    __dirname,
    '..',
    './src/components/weather-widget/WeatherWidget.tsx'
  ),
  externals: {
    react: 'react',
  },
};
