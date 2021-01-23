import {
  CardContent,
  CardHeader,
  Container,
  CssBaseline,
  Grid,
  Card,
  Typography,
  TextField,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  Button,
  ButtonGroup,
} from "@material-ui/core"
import React from "react"

import logo from "../images/logo.png"

import Carousell from "../components/Carosel/CaroselItems"
import Menu from "../components/Menu"

const Home = () => {
  return (
    <Container>
      <CssBaseline />
      <Grid container>
        <Grid item container style={{ backgroundColor: "#C0C0C0" }}>
          <Container>
            <Grid container>
              <Grid item sm={10}>
                <h1>Ristorante con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </Grid>
              <Grid item sm={2} style={{ padding: "1rem" }}>
                <img src={logo} height="100" width="200" />
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item container style={{ marginTop: "1rem" }}>
          <Grid item sm={2}></Grid>
          <Grid item sm={8}>
            <Carousell />
          </Grid>
          <Grid item sm={2}></Grid>
          <Menu />
          {/* <Grid item sm={2} style={{ padding: "2rem" }}>
            <img src={uthappizza} border="3px solid white" />
          </Grid>
          <Grid item sm={6}>
            <h2>
              Uthappizza
              <Chip
                label="HOT"
                color="secondary"
                style={{ marginLeft: "0.5rem" }}
              />
              <Chip
                label="£4.99"
                color="primary"
                style={{ marginLeft: "0.5rem" }}
              />
            </h2>
            <p>
              A unique combination of Indian Uthappam (pancake) and Italian
              pizza, topped with Cerignola olives, ripe vine cherry tomatoes,
              Vidalia onion, Guntur chillies and Buffalo Paneer
            </p>
          </Grid>
          <Grid item sm={3} style={{ padding: "3rem" }}>
            <h3>Our Lipsmacking Culniary Creations</h3>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item sm={2} style={{ padding: "2rem" }}>
            <h3>This Month's Promotions</h3>
          </Grid>
          <Grid item sm={6}>
            <h2>
              Weekend Grand Buffet
              <Chip
                label="New"
                color="secondary"
                style={{ marginLeft: "0.5rem" }}
              />
            </h2>
            <p>
              Featuring mouthwatering combinations with a choice of five
              different salads, six enticing appetizers, six main entrees and
              five choicest desserts. Free flowing bubbly and soft drinks. All
              for just $19.99 per person{" "}
            </p>
          </Grid>
          <Grid item sm={3} style={{ padding: "3rem" }}>
            <img src={buffet} border="3px solid white" />
          </Grid>
        </Grid>

        <Grid item container>
          <Grid item sm={2} style={{ padding: "2rem" }}>
            <img src={alberto} border="3px solid white" />
          </Grid>
          <Grid item sm={6}>
            <h2>Alberto Somayya</h2>
            <h4>Executive Chef</h4>
            <p>
              Award winning three-star Michelin chef with wide International
              experience having worked closely with whos-who in the culinary
              world, he specializes in creating mouthwatering Indo-Italian
              fusion experiences.{" "}
            </p>
          </Grid>
          <Grid item sm={3} style={{ padding: "3rem" }}>
            <h3>Meet our Culinary Specialists</h3>
          </Grid> */}
        </Grid>
        <Grid item container style={{ marginBottom: "1rem" }}>
          <Grid item sm={2} style={{ padding: "2rem" }}></Grid>
          <Grid item sm={8}>
            <Card style={{ marginTop: "1rem" }}>
              <CardHeader
                title="Reserve a Table"
                style={{
                  backgroundColor: "#C71585",
                  color: "white",
                }}
              />

              <CardContent>
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={2} style={{ padding: "1rem" }}>
                      <Typography>Number of guests</Typography>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <FormControl component="fieldset">
                        <RadioGroup
                          row
                          aria-label="gender"
                          name="gender1"
                          // value={value}
                          // onChange={handleChange}
                        >
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="1"
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="2"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label="3"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label="4"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label="5"
                          />
                          <FormControlLabel
                            value="6"
                            control={<Radio />}
                            label="6"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{ padding: "1rem" }}>
                      <Typography>Section</Typography>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <ButtonGroup
                        variant="contained"
                        aria-label="contained primary button group"
                      >
                        <Button color="primary">Non-Smoking</Button>
                        <Button color="secondary">Smoking</Button>
                      </ButtonGroup>
                    </Grid>

                    <Grid item xs={12} sm={2} style={{ padding: "1rem" }}>
                      <Typography>Date and time</Typography>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <TextField
                        autoComplete="date"
                        name="date"
                        variant="outlined"
                        required
                        fullWidth
                        id="date"
                        label="date"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="time"
                        label="time"
                        name="time"
                        autoComplete="time"
                      />
                    </Grid>
                    <Grid item xs={12} sm={2}></Grid>
                    <Grid item xs={12} sm={6}>
                      <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        style={{ marginRight: "1rem" }}
                      >
                        Reserve
                      </Button>
                      <Button
                        color="secondary"
                        variant="contained"
                        size="large"
                      >
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={2}></Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Home
