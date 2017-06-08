import React, {
	Component
} from 'react';

class ItemWrapper extends Component {
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
		return (<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 continfobox">
          <div className="infobox text-center">
            <div className="front">
              <figure className="col-lg-5 col-md-5 col-sm-12 col-xs-12 img-circle">
                <img className="figure-img cover" src="https://dc8gwjuur0w0x.cloudfront.net/lists/avatars/000/000/010/small_x2_Apple.jpg?1486166548" alt="Small x2 screen shot 2016 08 15 at 8.50.07 am"/>
                <img className="figure-img qrcode" src="https://dc8gwjuur0w0x.cloudfront.net/lists/avatars/000/000/005/small_x2_Screen_Shot_2016-08-22_at_1.39.14_PM.png?1471899655" alt="Small x2 screen shot 2016 08 15 at 8.50.07 am"/>
              </figure>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 info">
                <h3>Streaming</h3>
                <div className="tags"><b>会议</b></div>
                <span className="fa fa-tags operate-entry"></span>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 operate-area">
                <div className="operate-area-content container-fluid">
                  <div className="row margin-top-10">
                    <div className="operation-wrapper col-lg-4 col-md-4 col-sm-4 col-xs-4"><span className="fa fa-edit"></span></div>
                    <div className="operation-wrapper col-lg-4 col-md-4 col-sm-4 col-xs-4"><span className="fa fa-paper-plane-o"></span></div>
                    <div className="operation-wrapper col-lg-4 col-md-4 col-sm-4 col-xs-4"><span className="fa fa-cog"></span></div>
                  </div>
                  <div className="row margin-top-10">
                    <div className="operation-wrapper col-lg-4 col-md-4 col-sm-4 col-xs-4"><span className="fa fa-share"></span></div>
                    <div className="operation-wrapper col-lg-4 col-md-4 col-sm-4 col-xs-4"><span className="fa fa-folder-open-o"></span></div>
                    <div className="operation-wrapper col-lg-4 col-md-4 col-sm-4 col-xs-4"><span className="fa fa-copy"></span></div>
                  </div>
                  <div className="row margin-top-10">
                    <div className="operation-wrapper col-lg-4 col-md-4 col-sm-4 col-xs-4"><span className="fa fa-trash-o"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>);
	}
}

export default ItemWrapper;