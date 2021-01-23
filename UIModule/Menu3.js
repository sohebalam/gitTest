import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  List,
  Paper,
  Typography,
} from "@material-ui/core"
import React, { useState } from "react"
import DishDetail from "../frontend/src/components/DishDetail"
// import dishes from "../shared/dishes"
import dishes from "../frontend/src/shared/dishes"

const Menu = ({ dish }) => {
  const [selectedDish, setSelectedDish] = useState(null)

  const onDishSelect = (dish) => {
    setSelectedDish(dish)
  }
  return (
    <Container>
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
        <DishDetail selectedDish={selectedDish} dish={dish} />
      </Grid>
    </Container>
  )
}

export default Menu
