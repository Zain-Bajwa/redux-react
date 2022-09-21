import {counterReset} from '../actions/index';
import { useDispatch } from "react-redux";

const Reset = () => {
    const dispatch = useDispatch();

  return (
    <div className="row justify-content-center my-3">
      <div className="col-lg-2 col-4">
        <div className="input-group justify-content-center">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => dispatch(counterReset())}
          >
            Reset
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Reset;
