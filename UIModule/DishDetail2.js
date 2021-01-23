import React from "react"
import { Card, CardImg, CardText, CardBody, CardTitle } from "@material-ui/core"
import { Link } from "react-router-dom"

// function RenderDish(props){}
function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle> {dish.name} </CardTitle>
            <CardText> {dish.description} </CardText>
          </CardBody>
        </Card>
      </div>
    )
  } else {
    return <div></div>
  }
}

// function RenderComments(props){}
function RenderComments({ comments }) {
  if (comments != null) {
    const cmnts = comments.map((comment) => {
      return (
        <ul key={comment.id} className="list-unstyled">
          <li>
            <p> {comment.comment} </p>
            <p>
              {" "}
              -- {comment.author}, &nbsp;
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </li>
        </ul>
      )
    })

    return (
      <div className="col-12 col-md-5 m-1">
        <h4> Comments </h4>
        {cmnts}
      </div>
    )
    // if comments is empty
  } else {
    return <div></div>
  }
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              {" "}
              <Link to="home">Home</Link>{" "}
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default DishDetail
