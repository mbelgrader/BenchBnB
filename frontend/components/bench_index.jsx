import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    const { benches } = this.props;
    let benchList;

    // if (benches.length > 0) {
    //   benchList = benches.map((bench, i) => {
    //     return <BenchIndexItem key={i} bench={bench} />;
    //   });
    // }

    return (
      <div>
        {benchList}
      </div>
    );
  }
}

export default BenchIndex;
