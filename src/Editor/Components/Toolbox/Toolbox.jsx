import React, { Component } from 'react';
import './_toolbox.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

import DockedTitle from '../Util/DockedTitle/DockedTitle';

class Toolbox extends Component {
  render() {
    return(
      <div className="tool-box">
        <DockedTitle title={"Toolbox"}></DockedTitle>
      </div>

    )
  }
}

export default Toolbox