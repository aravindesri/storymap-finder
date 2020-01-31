import React from "react";
import Card, { CardTitle, CardContent, CardImage } from "calcite-react/Card";
import Button from "calcite-react/Button";

function ItemCard(props) {
  return (
    <Card key={props.id} className="card block trailer-1 animated-fade-in">
      <CardImage
        src={`https://www.arcgis.com/sharing/rest/content/items/${
          props.id
        }/info/${props.thumbnail}`}
        caption="Florida, January 1954"
        alt="Bridge Club, 1954"
      />
      <CardContent className="card-content">
        <CardTitle
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
          }}
        >
          {props.title ? props.title : "Untitled Story"}
        </CardTitle>
        <p
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
          }}
        >
          {props.snippet ? props.snippet : "Untitled description"}
        </p>
        <Button
          href={props.isStg ? `${props.stgUrl}/${props.id}` : props.url}
          target="_blank"
        >
          View Story
        </Button>
      </CardContent>
    </Card>
  );
}

export default ItemCard;
