import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  styled,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CloudLightning, DollarCircle } from "iconsax-react";
import Chart from "react-apexcharts";
import { useNavigate } from "react-router-dom";
import { ArrowForward, Percent } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { createBasketAction } from "../../Redux/actions";
const RightTables = styled(Box)`
  width: 80%;
  margin-left: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  margin-left: auto;
  @media (max-width: 1200px) {
    margin-left: 0px;
    margin: 0 auto;

    /* align-items: center; */
  }
`;
export const Btn = styled(Button)`
  font-family: Montserrat SemiBold;
  font-weight: 600;
  font-size: 18px;
  color: gold;
  text-transform: none;
  background: #060300;
  &:hover {
    background: #060300;
  }
`;

const TableParentDiv = styled(Box)`
  /* background-image: linear-gradient(
    to right,
    rgb(6, 30, 55),
    rgb(0, 41, 86),
    rgb(0, 51, 118),
    rgb(0, 59, 150),
    rgb(20, 66, 181)
  ); */
  /* background: linear-gradient(
    90deg,
    rgba(63, 94, 251, 1) 0%,
    rgba(237, 255, 235, 1) 0%,
    rgba(213, 246, 191, 1) 18%
  ); */
  background-color: #f6f7fb;
  padding: 5px 10px;
  border-radius: 10px;
`;
export const Title = styled(Typography)(({ theme }) => ({
  // color: "rgb(244, 107, 21)",
  fontSize: "16px",
  textAlign: "center",
  fontFamily: "Russo One, sans-serif",
  marginTop: "30px",
  marginBottom: "10px",
  // color: "#af56c5",
}));
export const TableBox = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "0px 10px",
  boxShadow: "#7E7E7E -2px 2px 1px",
  borderRadius: "10px",
  marginBottom: "15px",
  alignItems: "center",
}));
export const Name = styled(Typography)(({ theme }) => ({
  color: "black",
  fontSize: "10px",
  textAlign: "center",
  fontFamily: "Inter",
  fontWeight: 600,
}));
export const Value = styled(Typography)(({ theme }) => ({
  color: "black",
  fontSize: "10px",
  fontFamily: "Inter",
  textAlign: "end",
  fontWeight: 600,
}));

const BasketComposition = () => {
  const [createValue, setCreateValue] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const [fieldArray, setFieldArray] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [Inpratio, setInpRatio] = useState("");
  const [Inprice, setInprice] = useState("");
  const [percentage, setPercentage] = useState(null);
  const [price, setPrice] = useState([]);
  const [totalPrice, setTotalPrice] = useState(Number);
  const [totalTarget, setTotalTarget] = useState(Number);
  const [showChart, setShowChart] = useState(true);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [basketName, setBasketName] = useState("");
  const dispatch = useDispatch();

  //! 14-3/evening
  const [arrayOfObjects, setArrayOfObjects] = useState([]);

  console.log("ThisIsInputData", inputVal);

  const BucketCountBox = styled(Box)(({ theme }) => ({
    marginTop: "20px",
    // width: "452px",
    display: "flex",

    [theme.breakpoints.between(1200, 1300)]: {
      width: "342px",
    },
    [theme.breakpoints.between(1300, 1500)]: {
      width: "392px",
    },
    [theme.breakpoints.between(1501, 1700)]: {
      width: "446px",
    },
    [theme.breakpoints.between(1701, 1800)]: {
      width: "515px",
    },
    [theme.breakpoints.between(1801, 2000)]: {
      width: "556px",
    },
    [theme.breakpoints.between(2001, 2200)]: {
      width: "625px",
    },
    [theme.breakpoints.down(1200)]: {
      width: "auto",
      marginRight: "14px",
    },
  }));
  const ChartBox = styled(Chart)(({ theme }) => ({
    // marginTop: "20px",
    // width: "452px",
    // display: "flex",
    width: "280px",

    [theme.breakpoints.between(1200, 1300)]: {
      width: "345px",
    },
    [theme.breakpoints.between(1300, 1500)]: {
      width: "398px",
    },
    [theme.breakpoints.between(1501, 1700)]: {
      width: "452px",
    },
  }));

  const navigate = useNavigate();
  const handleCreateInputs = () => {
    setFieldArray([]);
    setArrayOfObjects([]);
    setTotalPrice(0);
    setTotalTarget(0);
    if (createValue > 0) {
      setButtonDisable(false);
      setShow(true);
      for (let i = 1; i <= createValue; i++) {
        const objectData = {
          id: i,
          ratio: 3,
          ratioName: `priceName${i}`,
          // price: 10,
          priceName: `priceName${i}`,
        };
        const objectData2 = {
          componentName: "",
          ratio: "",
          price: "",
          target: "",
        };

        setTimeout(() => {
          setFieldArray((prevState) => [...prevState, objectData]);
          setArrayOfObjects((prevState) => [...prevState, objectData2]);
          // setValues({...values,})
        }, 500);
      }
      setTimeout(() => {
        setShow(true);
      }, 500);
    } else {
      console.log("invalid");
    }
  };
  const handleChange = (e) => {
    // setFieldArray(prevState=> [...prevState , [e.target.name] : e.target.value])
  };

  // console.log("Array", fieldArray);
  // console.log("ratio and price", arrayOfObjects);
  const handleObject = (e, index) => {
    // setArrayOfObjects((prevState) => [
    //   { ...prevState, [arrayOfObjects.ratio]: e.target.value },
    // ]);
    let newArr = [...arrayOfObjects];
    let res = newArr[0];
    // arrayOfObjects[index][e.target.name] = e.target.value;
    arrayOfObjects[index].ratio = e.target.value;

    // console.log("This is New Keys", newResult);
  };
  const handleObject2 = (e, index) => {
    // setArrayOfObjects((prevState) => [
    //   { ...prevState, [arrayOfObjects.ratio]: e.target.value },
    // ]);
    let newArr = [...arrayOfObjects];
    let res = newArr[0];
    // arrayOfObjects[index][e.target.name] = e.target.value;
    arrayOfObjects[index].componentName = e.target.value;

    // console.log("This is New Keys", newResult);
  };
  const handleObject3 = (e, index) => {
    // setArrayOfObjects((prevState) => [
    //   { ...prevState, [arrayOfObjects.ratio]: e.target.value },
    // ]);
    let newArr = [...arrayOfObjects];
    let res = newArr[0];
    // arrayOfObjects[index][e.target.name] = e.target.value;
    arrayOfObjects[index].target = e.target.value;

    // console.log("This is New Keys", newResult);
  };

  const [priceState, setPriceState] = useState("");

  console.log("test2", priceState);

  const handleObject1 = (e, index) => {
    // setArrayOfObjects((prevState) => [
    //   { ...prevState, [arrayOfObjects.ratio]: e.target.value },
    // ]);
    let newArr = [...arrayOfObjects];
    let res = newArr[0];
    // arrayOfObjects[index][e.target.name] = e.target.value;
    arrayOfObjects[index].price = e.target.value;

    setPriceState(e.target.value);

    // console.log("This is New Keys", newResult);
  };

  // console.log("Test", arrayOfObjects[0].price);

  const ratioObject = [];
  const priceObject = [];

  const handleFinalValueChange = () => {
    console.log("hit");
    setTotalPrice(0);
    setTotalTarget(0);
    setInputVal([...inputVal, { ratio: Inpratio, price: Inprice }]);
    setTimeout(() => {
      for (let j = 0; j < arrayOfObjects.length; j++) {
        priceObject.push(arrayOfObjects[j].componentName);
        console.log("CheckCompName", arrayOfObjects[j].componentName);
        // priceObject.push(arrayOfObjects[j].price);
        ratioObject.push(parseInt(arrayOfObjects[j].ratio));
        // console.log("ratioCheck", arrayOfObjects[j].ratio);
        // console.log("ratioCheck", arrayOfObjects[j].ratio);
        setPercentage(ratioObject);
        // setPercentage([...percentage, "."]);
        setPrice(priceObject);
        setTotalPrice(
          (prevState) => (prevState += parseFloat(arrayOfObjects[j].price))
        );
        setTotalTarget(
          (prevState) => (prevState += parseFloat(arrayOfObjects[j].target))
        );
      }
      setTimeout(() => {
        setShowChart(false);
      }, 1000);
    }, 1000);
    // setChart((prevState) => [{ ...prevState, series: [...prevState, 20] }]);
  };

  console.log("Total Price", totalPrice);
  console.log("percentage check", percentage);
  console.log("Price check", price);
  console.log("checking ratio", arrayOfObjects);

  const [chart, setChart] = useState({
    options: {},
    series: [23, 45],
    labels: [],
  });
  console.log(chart.series);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const handleCreateBasket = (basketName, arrayOfObjects) => {
    dispatch(createBasketAction(basketName, arrayOfObjects));
  };

  const signPer = "%";

  // const NewOtp = {
  //   options: {
  //     labels: price,
  //   },
  //   series: percentage,
  // };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: { lg: "90vh", md: "90vh", sm: "90vh", xs: "120vh" },
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { lg: "90%", md: "80%", sm: "96%", xs: "96%" },
            minHeight: { lg: "83vh", md: "83vh", sm: "83vh", xs: "115vh" },
            height: "auto",
            pb: "20px",
            boxShadow: "5px 5px 15px #aaaaaa",
            borderRadius: "12px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: { lg: "start", md: "start", sm: "start", xs: "center" },
            paddingRight: "40px",
            // justifyContent: "center",
          }}
        >
          <Box
            sx={{
              mt: "20px",
              pl: { lg: "50px", md: "70px", sm: "40px", xs: "20px" },
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "text.primary",
                fontWeight: 300,
                fontSize: "20px",
              }}
            >
              Create Basket
            </Typography>
            <Button
              variant='contained'
              sx={{
                // color: "text.primary",
                fontWeight: 300,
                height: "30px",
                fontSize: "12px",
                marginRight: "35px",
              }}
              onClick={() => navigate("/editBasket")}
            >
              Manage Basket
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: { lg: "50%", md: "100%", sm: "100%", xs: "100%" },
                minWidth: { lg: "50%", md: "100%", sm: "100%", xs: "100%" },
                maxWidth: { lg: "50%", md: "100%", sm: "100%", xs: "100%" },
              }}
            >
              <React.Fragment>
                <Box
                  sx={{
                    mt: "20px",

                    pl: {
                      lg: "50px",
                      md: "70px",
                      sm: "40px",
                      xs: "20px",
                    },
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mr: "20px",
                    }}
                  >
                    <OutlinedInput
                      sx={{
                        fontSize: "12px",
                        height: "30px",
                        mr: "12px",
                        "& input::placeholder": {
                          fontSize: "12px",
                        },
                      }}
                      fullWidth
                      placeholder='Name of basket'
                      type='text'
                      margin='normal'
                      required
                      value={basketName}
                      onChange={(e) => setBasketName(e.target.value)}
                    />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <OutlinedInput
                      endAdornment={
                        <InputAdornment sx={{ width: "15px" }}>
                          <Button
                            onClick={handleCreateInputs}
                            sx={{
                              borderLeft: "1px solid gray",
                              borderTopLeftRadius: "0px",
                              borderBottomLeftRadius: "0px",
                              padding: "0",
                              fontSize: "10px",
                              minWidth: "30px",
                              "&:hover": {
                                backgroundColor: "#635bff",
                                color: "white",
                              },
                            }}
                            // disableRipple
                            // disableFocusRipple
                          >
                            <ArrowForward
                              sx={{ fontSize: "18px", height: "30px" }}
                            />
                          </Button>
                        </InputAdornment>
                      }
                      sx={{
                        fontSize: "12px",
                        height: "30px",
                        // mr: "0px",
                        // maxWidth: "162px",
                        "& input::placeholder": {
                          fontSize: "12px",
                        },
                      }}
                      fullWidth
                      placeholder='Enter Number'
                      type='number'
                      margin='normal'
                      required
                      value={createValue}
                      onChange={(e) => setCreateValue(e.target.value)}
                    />
                  </Box>
                </Box>
              </React.Fragment>
              {show && (
                <>
                  {fieldArray.map((data, index) => (
                    <React.Fragment key={index}>
                      <Box
                        sx={{
                          mt: "8px",

                          pl: {
                            lg: "50px",
                            md: "70px",
                            sm: "40px",
                            xs: "20px",
                          },
                          display: "flex",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            mr: "5px",
                          }}
                        >
                          <InputLabel sx={{ mb: "1px", fontSize: "9px" }}>
                            Comp Name {index + 1}
                          </InputLabel>
                          <OutlinedInput
                            sx={{
                              height: "30px",
                              fontSize: "11px",
                              mr: "5px",
                              "& input::placeholder": {
                                fontSize: "10px",
                                // position: "absolute",
                                // right: 6,
                              },
                            }}
                            fullWidth
                            placeholder='Name'
                            type='text'
                            margin='normal'
                            required
                            onChange={(e) => handleObject2(e, index)}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            mr: "5px",
                          }}
                        >
                          <InputLabel sx={{ mb: "1px", fontSize: "9px" }}>
                            Comp Ratio {index + 1}
                          </InputLabel>
                          <OutlinedInput
                            endAdornment={
                              <InputAdornment
                                position='end'
                                sx={{
                                  fontSize: "9px",
                                  width: "10px",
                                  marginLeft: "-4px",
                                }}
                              >
                                <Percent sx={{ width: "14px" }} />
                              </InputAdornment>
                            }
                            sx={{
                              height: "30px",
                              fontSize: "11px",
                              mr: "5px",
                              "& input::placeholder": {
                                fontSize: "10px",
                                // position: "absolute",
                                // right: 6,
                              },
                            }}
                            fullWidth
                            placeholder='Ratio'
                            type='number'
                            margin='normal'
                            required
                            onChange={(e) => handleObject(e, index)}
                            // id={data.id - 1}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            mr: "5px",
                          }}
                        >
                          <InputLabel sx={{ mb: "1px", fontSize: "9px" }}>
                            Price {index + 1}
                          </InputLabel>
                          <OutlinedInput
                            startAdornment={
                              <InputAdornment
                                position='end'
                                sx={{
                                  width: "16px",
                                  marginRight: "8px",
                                  marginLeft: "-10px",
                                }}
                              >
                                <DollarCircle sx={{ width: "12px" }} />
                              </InputAdornment>
                            }
                            sx={{
                              fontSize: "11px",
                              height: "30px",
                              mr: "0px",
                              "& input::placeholder": {
                                fontSize: "10px",
                                // position: "absolute",
                                // right: 6,
                              },
                            }}
                            fullWidth
                            placeholder='0.00'
                            type='number'
                            margin='normal'
                            required
                            onChange={(e) => handleObject1(e, index)}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            mr: "5px",
                          }}
                        >
                          <InputLabel sx={{ mb: "1px", fontSize: "9px" }}>
                            Target Count {index + 1}
                          </InputLabel>
                          <OutlinedInput
                            sx={{
                              fontSize: "11px",
                              height: "30px",
                              mr: "0px",
                              "& input::placeholder": {
                                fontSize: "10px",
                                // position: "absolute",
                                // right: 6,
                              },
                            }}
                            fullWidth
                            placeholder='Count'
                            type='text'
                            margin='normal'
                            required
                            onChange={(e) => handleObject3(e, index)}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            mr: "5px",
                          }}
                        >
                          <InputLabel sx={{ mb: "1px", fontSize: "9px" }}>
                            24 hours high
                          </InputLabel>
                          <OutlinedInput
                            sx={{
                              fontSize: "11px",
                              height: "30px",
                              mr: "0px",
                              "& input::placeholder": {
                                fontSize: "10px",
                                // position: "absolute",
                                // right: 6,
                              },
                            }}
                            disabled
                            fullWidth
                            // placeholder='420.00'
                            value='420.00'
                            type='text'
                            margin='normal'
                            required
                            // onChange={(e) => handleObject3(e, index)}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            mr: "0px",
                          }}
                        >
                          <InputLabel sx={{ mb: "1px", fontSize: "9px" }}>
                            24 hours low
                          </InputLabel>
                          <OutlinedInput
                            sx={{
                              fontSize: "11px",
                              height: "30px",
                              mr: "0px",
                              "& input::placeholder": {
                                fontSize: "10px",
                                // position: "absolute",
                                // right: 6,
                              },
                            }}
                            disabled
                            fullWidth
                            // placeholder='2720.30'
                            value='2720.30'
                            type='text'
                            margin='normal'
                            required
                            // onChange={(e) => handleObject3(e, index)}
                          />
                        </Box>
                      </Box>
                    </React.Fragment>
                  ))}
                  <Typography
                    variant='h5'
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "10px",
                      fontSize: "12px",
                    }}
                  >
                    Total: {formatter.format(totalPrice)} USD
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "10px",
                      fontSize: "12px",
                    }}
                  >
                    Total Target: {totalTarget}
                  </Typography>
                </>
              )}
              <Button
                variant='contained'
                disabled={buttonDisable}
                sx={{
                  width: "120px",
                  margin: "20px 0px 0px auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "25px",
                  fontSize: "11px",
                }}
                onClick={handleFinalValueChange}
              >
                Confirm
              </Button>
              {/* <Button
                variant='contained'
                disabled={buttonDisable}
                sx={{
                  width: "200px",
                  margin: "20px auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "30px",
                  fontSize: "12px",
                }}
                onClick={handleCreateBasket}
              >
                Create
              </Button> */}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                pr: { lg: "20px", md: "0px", sm: "0px", xs: "0px" },
                justifyContent: "flex-end",
                textAlign: "end",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    lg: "flex-end",
                    md: "center",
                    sm: "center",
                    xs: "center",
                  },
                  width: "100%",
                  mt: 1,
                }}
              >
                <Chart
                  options={{
                    // title: { text: "Bucket PieChart" },
                    noData: { text: "Empty Data" },
                    labels: showChart
                      ? ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5"]
                      : price,
                  }}
                  series={showChart ? [25, 25, 20, 20, 10] : percentage}
                  // series={showChart ? [25, 25, 20, 20, 10] : percentage}
                  // options={NewOtp.options}
                  // series={NewOtp.series}
                  // series={(percentage, true)}
                  // legend={show: false}
                  type='donut'
                  width='340'
                  // width={xl:'440px',lg:'380px'}
                />
              </Box>

              {showChart ? (
                ""
              ) : (
                <>
                  <TableContainer
                    component={Paper}
                    sx={{
                      width: { lg: "85%", md: "100%", sm: "100%", xs: "100%" },
                      boxShadow: "none",
                      paddingLeft: { lg: "80px", md: "0px" },
                      // marginLeft: "auto",
                      marginLeft: {
                        lg: "auto",
                        md: "0",
                      },
                      // display: "flex",
                      // justifyContent: "flex-end",
                    }}
                  >
                    <Table
                      aria-label='simple table'
                      sx={{
                        // backgroundColor: "#f6f7fb",
                        marginTop: "10px",
                        // width: "50%",
                      }}
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell
                            size='small'
                            padding='0 10px'
                            sx={{ fontSize: "11px", width: 0 }}
                            align='left'
                          >
                            Name
                          </TableCell>
                          <TableCell
                            size='small'
                            padding='none'
                            sx={{ fontSize: "11px", width: 0 }}
                            align='center'
                          >
                            Ratio
                          </TableCell>
                          <TableCell
                            size='small'
                            padding='none'
                            sx={{ fontSize: "11px", width: 0 }}
                            align='center'
                          >
                            Price
                          </TableCell>
                          <TableCell
                            size='small'
                            padding='0 0px'
                            sx={{ fontSize: "11px", width: 0 }}
                            align='right'
                          >
                            Target
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {arrayOfObjects.map((data, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              // boxShadow: "#7E7E7E -2px 2px 1px",
                              // "&:last-child td, &:last-child th": { border: 0 },
                              // "&:last-child td, &:last-child th": { border: 0 },
                              "& > tr": {
                                maxHeight: "30px",
                              },
                              // "& > td , th": {
                              //   border: 0,
                              // },
                            }}
                          >
                            <TableCell
                              size='small'
                              padding='0px 0px'
                              sx={{ fontSize: "11px" }}
                              align='left'
                            >
                              {data.componentName}
                            </TableCell>
                            <TableCell
                              size='small'
                              padding='0px 0px'
                              sx={{ fontSize: "11px", pt: "0", pb: "0" }}
                              align='center'
                            >
                              {data.ratio}%
                            </TableCell>
                            <TableCell
                              size='small'
                              padding='0px 0px'
                              sx={{ fontSize: "11px" }}
                              align='center'
                            >
                              {formatter.format(data.price)}
                            </TableCell>
                            <TableCell
                              size='small'
                              padding='0px 0px'
                              sx={{ fontSize: "11px" }}
                              align='right'
                            >
                              {((data.target / totalTarget) * 100).toFixed(2)}%
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Value sx={{ fontSize: "11px", fontWeight: 800 }}>
                      1 Ton Total Carbon Credits ={" "}
                      {formatter.format(totalPrice)} USD
                    </Value>
                  </TableContainer>
                </>
              )}
            </Box>
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
};

export default BasketComposition;

// function InputFeilds({ inputField }) {
//   var intArr = Array.from(String(inputField), () => { });
//   console.log(intArr);
//   return (
//     inputField && (
//       <>
//         {intArr.map((e, index) => {
//           return <a key={index}>input {index}</a>;
//         })}
//       </>
//     )
//   );
// }
