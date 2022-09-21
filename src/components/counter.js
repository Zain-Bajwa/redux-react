import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { counterIncrement, counterDecrement } from "../actions/index";

const Counter = () => {
  const counter = useSelector((counter) => counter.changeCounter);

  const dispatch = useDispatch();
  return (
    

      <div className="row justify-content-center my-3">
        <div className="col-lg-2 col-4">
          <div className="input-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => dispatch(counterDecrement())}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input
              type="text"
              id="form1"
              value={counter}
              className="form-control text-secondary"
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => dispatch(counterIncrement())}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
  );
};

export default Counter;
