import { ThemeProvider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import AppButton from './components/AppButton/AppButton';
import AppCard from './components/AppCard/AppCard';
import AppTypography from './components/AppTypography/AppTypography';
import {
  decrement,
  increment,
  incrementByAmount,
} from './redux/slices/counter';
import { RootState } from './redux/store';
import theme from './theme/theme';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <AppCard padding={24}>
          <div>
            <AppButton onClick={() => dispatch(decrement())}>
              primary (-)
            </AppButton>
            <AppButton color='secondary' onClick={() => dispatch(increment())}>
              secondary (+)
            </AppButton>
            <AppButton
              color='success'
              onClick={() => dispatch(incrementByAmount(-5))}
            >
              success (-5)
            </AppButton>
            <AppButton
              color='error'
              onClick={() => dispatch(incrementByAmount(5))}
            >
              error (+5)
            </AppButton>
            <AppButton color='warning'>warning</AppButton>
            <AppButton color='info'>info</AppButton>
          </div>
          <div>
            <AppTypography variant='h3'>counter: {count}</AppTypography>
          </div>
          <div>
            <AppTypography variant='body1'>Hello, World!</AppTypography>
          </div>
        </AppCard>
      </div>
    </ThemeProvider>
  );
};

export default App;
