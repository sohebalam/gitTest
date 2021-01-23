import {
  Card,
  CardActions,
  CardHeader,
  Grid,
  List,
  Paper,
} from "@material-ui/core"
import React from "react"

// import dishes from "../shared/dishes"

const Menu = ({ dishes }) => {
  const menu = dishes.map((dish) => {
    return (
      <Grid item key={dish.id}>
        {/* <Paper>
          <Grid container style={{ marginTop: "0.5rem" }}>
            <Grid item sm={2} style={{ padding: "2rem" }}>
              <img src={dish.image} border="3px solid white" />
            </Grid>
            <Grid item sm={6}>
              <h2>{dish.name}</h2>
              <p>{dish.description}</p>
            </Grid>
            <Grid item sm={2} style={{ padding: "2rem" }}></Grid>
          </Grid>
        </Paper> */}

        <Card>
          <img width="100%" src={dish.image} border="3px solid white" />
          <CardHeader title={dish.name} />
        </Card>
      </Grid>
    )
  })

  return (
    <div>
      <List>{menu}</List>
    </div>
  )
}

export default Menu
