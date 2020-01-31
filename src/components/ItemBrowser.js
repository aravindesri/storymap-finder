import React from "react";
import ItemCard from "./ItemCard";
import Loading from "./Loading";
import { CalciteP } from "calcite-react/Elements";

function ItemBrowser(props) {
  return (
    <React.Fragment>
      {props.isLoading ? (
        <Loading />
      ) : (
        <div className="grid-container leader-1">
          <div className="column-24">
            <CalciteP style={{ textAlign: "center" }}>
              Showing {props.num} / {props.total}{" "}
            </CalciteP>
            <div className="padding-leader-1 block-group block-group-4-up tablet-block-group-3-up phone-block-group-1-up">
              {props.results.map(item => (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  thumbnail={item.thumbnail}
                  owner={item.owner}
                  title={item.title}
                  snippet={item.snippet}
                  url={item.url}
                  isStg={props.isStg}
                  stgUrl={props.stgUrl}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ItemBrowser;
