import { CHANGEVARIABLE } from '../actions/type';

//store all redux variables here
const INITIAL_STATE = {
  activity: false,
  firstName:'',
  lastName :'',
  authenticated: false,
  dob: '',
  email: '',
  gender:'',
  photo_url:'',
  error: false,
  errorText: '',
  password: '',
  uid: '',
  roll_no: '',
  phone_no: '',
  role: '',
  city:'',
  state:'',
  jwtToken :''
};
const a = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGEVARIABLE:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};
export { a as default };