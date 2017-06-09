import React, {
	Component
} from 'react';
import NavBar from './NavBar';

class Header extends Component {
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
		return (<header className="fullbg headertop">
      <div className="container">
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 logotop">
          <a className="inside-logo" href="/"></a>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 text-right logotxttop">
          <button type="button" className="btn btn-default header-btn-left yellow-btn">创建场景</button>
          <button type="button" className="btn btn-success header-btn-left">模板商城</button>
          <div className="header-btn-right">
            <span className="header-username">username</span>
            <img className="user-avatar" src="./src/img/default-user.jpg" alt=""/>
          </div>
        </div>
        <NavBar {...this.props}></NavBar>
      </div>
    </header>);
	}
}

export default Header;