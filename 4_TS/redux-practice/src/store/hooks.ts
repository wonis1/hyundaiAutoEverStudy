import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
// 타입이 적용된 커스텀 Hook
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();