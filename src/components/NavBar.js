import React, {
	Component
} from 'react';

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
        <a className="active" id="all-tags-link" href="/">企业后台</a>
        <div className="tags-list">
          <div className="tags-fade-left"></div>
          <ul id="tags-links">
            <li><a className="tag-anchor" id="tag-link-technology" href="/tags/technology">场景管理</a></li>
            <li><a className="tag-anchor" id="tag-link-proposed" href="/tags/proposed">素材管理</a></li>
            <li><a className="tag-anchor" id="tag-link-politics" href="/tags/politics">数据收集</a></li>
            <li><a className="tag-anchor" id="tag-link-business" href="/tags/business">角色管理</a></li>
            <li><a className="tag-anchor" id="tag-link-cities" href="/tags/cities">员工管理</a></li>
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