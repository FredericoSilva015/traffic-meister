import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import App from './App';

/**
 * Hello, I currently do not have competences on this field so i am mostly leaving this part empty.
 * I understand this penalizes me, but i am not confident i can write test's in a manner that i would approve.
 * While i do not have the competence i am willing to learn/improve this aspect i am missing.
 */
test('Render Application', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
