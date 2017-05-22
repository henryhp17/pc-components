import express from 'express';
import path from 'path';
import bodyParser from 'bodyParser';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from 'webpack.config';

const app = express();

webpackConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:8080');
const compiler = webpack(webpackConfig);

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'src/www')));
app.use(webpackDevMiddleware(compiler));

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Application successfully started at port: ' + port);
});
exports = module.exports = app;
