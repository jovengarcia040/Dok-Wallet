import {Dimensions} from 'react-native';
import {useEffect, useState} from 'react';

export function useFloatingHeight() {
  const [floatBtn, setFloatBtn] = useState(0);

  useEffect(() => {
    const {height: screenHeight} = Dimensions.get('window');

    if (screenHeight < 699) {
      setFloatBtn(screenHeight / 2.7);
      return;
    }
    if (screenHeight > 699) {
      setFloatBtn(screenHeight / 2.2);
      return;
    }
  }, []);
  return floatBtn;
}
