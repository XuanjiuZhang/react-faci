import React, {
	Component
} from 'react';
import Header from './Header.js';
import './appFaci.less';
import AppFaciRouter from './AppFaciRouter';

class AppFaci extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    
  }

  componentDidUpdate(prevProps, prevState){
    
  }

	render() {
    /*const animated = classNames({
      'phone-page': true,
      'animated-page': this.state.inTurnPage,
      'animated-page-fast': this.state.fastTurnPage
    });*/
		return (<div className="full">
      <Header></Header>
      <AppFaciRouter></AppFaciRouter>
    </div>);
	}
}

export default AppFaci;