import React, {
	Component
} from 'react';
import ItemWrapper from './ItemWrapper';

class ContentContainer extends Component {
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
		return (<div className="container">
    <header className="col-xs-12 text-center infoheader">

    </header>
    <section className="col-xs-12 newsletters">
      <div className="row">
        <ItemWrapper></ItemWrapper>
        <ItemWrapper></ItemWrapper>
        <ItemWrapper></ItemWrapper>
        <ItemWrapper></ItemWrapper>
      </div>
    </section>
  </div>);
	}
}

export default ContentContainer;