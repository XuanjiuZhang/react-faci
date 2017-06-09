import React, {
	Component
} from 'react';
import {
  Link
} from 'react-router-dom';

class NavBar extends Component {
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
		return (<div className="col-xs-12 tags-wrapper">
        <Link className="active" id="all-tags-link" to={'/'}>企业后台</Link>
        <div className="tags-list">
          <div className="tags-fade-left"></div>
          <ul id="tags-links">
            {/*<li><Link to={'/manage'}>Rendering with React</Link></li>*/}
            <li><Link to={'/manage'} className="tag-anchor">场景管理</Link></li>
            <li><Link to={'/manage'} className="tag-anchor">素材管理</Link></li>
            <li><Link to={'/manage'} className="tag-anchor">数据收集</Link></li>
            <li><Link to={'/manage'} className="tag-anchor">角色管理</Link></li>
            <li><Link to={'/manage'} className="tag-anchor">员工管理</Link></li>
          </ul>
          <div className="tags-fade-right"></div>
        </div>
        <div id="tags-arrows">
          <a id="arrow-left" className="tags-arrows disabled" href="#"><i className="fa fa-chevron-left"></i></a>
          <a id="arrow-right" className="tags-arrows" href="#"><i className="fa fa-chevron-right"></i></a>
        </div>
      </div>);
	}
}

export default NavBar;