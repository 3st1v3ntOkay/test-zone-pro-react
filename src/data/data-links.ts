import { v4 as uuidv4 } from 'uuid';
import { DataLink } from '../models/global-types';

export const data: DataLink[] = [
  {
    id: uuidv4(),
    url: 'use-callback',
    page: 'useCallback',
  },
  {
    id: uuidv4(),
    url: 'use-context',
    page: 'useContext',
  },
  {
    id: uuidv4(),
    url: 'use-effect',
    page: 'useEffect',
  },
  {
    id: uuidv4(),
    url: 'use-reducer',
    page: 'useReducer',
  },
  {
    id: uuidv4(),
    url: 'use-memo',
    page: 'useMemo',
  },
];
