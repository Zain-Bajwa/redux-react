import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="row mt-5">
        <div className="col">
          <h1 className="text-center">Increment/Decrement Counter</h1>
        </div>
      </div>

      <div className="row my-3">
        <div className="col">
          <h4 className="text-center">Using React and Redux</h4>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
