import {Provider} from 'react-redux';
import {persistor, store} from 'redux/store';
import {Provider as PaperProvider} from 'react-native-paper';
import {ToastProvider} from 'react-native-toast-notifications';
import {PersistGate} from 'redux-persist/integration/react';
import Main from 'components/main';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastProvider offsetBottom={100}>
          <PaperProvider>
            <Main />
          </PaperProvider>
        </ToastProvider>
      </PersistGate>
    </Provider>
  );
}
