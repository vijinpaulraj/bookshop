import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BookDirectory } from './components/BookDirectory';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BookDirectory} />
      </Switch>
    </BrowserRouter>
  );
}
