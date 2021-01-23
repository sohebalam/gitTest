import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  List,
  Paper,
  Typography,
} from "@material-ui/core"
import React, { useState } from "react"

// import dishes from "../shared/dishes"

const Menu = ({ dishes, dish }) => {
  const [selectedDish, setSelectedDish] = useState(null)

  const onDishSelect = (dish) => {
    setSelectedDish(dish)
  }
  const renderDish = (dish) => {
    if (dish != null) {
      return (
        <Card>
          <CardActionArea>
            <img width="100%" src={dish.image} border="3px solid white" />
            <CardHeader title={dish.name} />
            <Typography>{dish.description}</Typography>
          </CardActionArea>
        </Card>
      )
    } else {
      return <div></div>
    }
  }
  return (
    <div>
      <Grid
        container
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
        spacing={2}
      >
        {dishes.map((dish) => (
          <Grid key={dish.id} item xs={12} sm={6}>
            <Card onClick={() => onDishSelect(dish)}>
              <CardActionArea>
                <CardHeader title={dish.name} />
                <img width="100%" src={dish.image} border="3px solid white" />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid style={{ marginBottom: "1rem", marginTop: "1rem" }}>
        {renderDish(selectedDish)}
      </Grid>
    </div>
  )
}

export default Menu
