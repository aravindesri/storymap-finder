import React from "react";
import ItemBrowser from "../components/ItemBrowser";
import axios from "axios";

class Stories extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      total: 0,
      num: 0,
      stgUrl: "https://storymapsstg.arcgis.com/stories",
      isLoading: true
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://www.arcgis.com/sharing/rest/search?q=type%3Astorymap%20NOT%20typekeywords%3AstorymapcollectionAND%20typekeywords%3A(smstatuspublished)%20AND%20orgid%3A(NOT(dGkWQRTbdsLW3GnN%20AND%204E2kXnaVf5dNC6X0%20AND%20nzS0F0zdNLvs7nc8))&sortorder=desc&sortfield=modified&num=100&f=pjson`
      )
      .then(response => {
        const { num, total, results } = response.data;
        this.setState({
          results,
          total,
          num,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <ItemBrowser
        results={this.state.results}
        stgUrl={this.state.stgUrl}
        num={this.state.num}
        total={this.state.total}
        isLoading={this.state.isLoading}
        isStg={this.props.isStg}
      />
    );
  }
}

export default Stories;
