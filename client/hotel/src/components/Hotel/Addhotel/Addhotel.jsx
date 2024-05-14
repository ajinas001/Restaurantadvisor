
import React, { useEffect } from "react";
import "./addhotel.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add_hotel() {
    const id = localStorage.getItem("Restaurant_id");
    console.log(id);
    const [files, setFiles] = useState([]);
    const [logo, setlogo] = useState();
    const [hoteldetails, sethoteldetails] = useState({});

    console.log(files);
    console.log(logo);


    const [district, setdistrict] = useState([]);

    // const [name ,setname] = useState();
    // const [place ,setplace] = useState();
    // const [pin ,setpin] = useState();
    // const [email ,setemail] = useState();
    // const [time ,settime] = useState();
    // const [phone, setphone]= useState();
    // const [special, setspecial]= useState();
    // const [meals, setmeals]= useState();
    // const [features, setfeatures]= useState();

    useEffect(() => {
        console.log("id==", id);
        axios
            .get("http://localhost:4001/save/view-district")
            .then((res) => {
                console.log(res);
                setdistrict(res.data.data);
            })
            .catch((err) => {
                console.log("Error in POST request:", err);
            });
    }, []);

    useEffect(() => {
        axios.post("http://localhost:4001/save/idfinding", { id }).then((res) => {
            console.log(res)
            sethoteldetails(res.data.data);
            console.log(hoteldetails,"hoteldetails");
            setdata({
                name: res.data.data.name,
                email: res.data.data.email,
                restuarantid: res.data.data.restuarantid,
                pin: res.data.data.pin,
                place: res.data.data.place,
                time: res.data.data.time,
                phone: res.data.data.phone,
                special: res.data.data.special,
                meals: res.data.data.meals,
                features: res.data.data.features,
                district: res.data.data.district,
                logo: res.data.data.logo,
                images: res.data.data.images,
            })

            console.log("data=", data);

        }).catch((err) => {
            console.log("catch error", err);
            sethoteldetails(null)
            console.log(hoteldetails,"hoteldetails==");
        });
    }, []);

    console.log(district);
    console.log(hoteldetails);

    const navigate = useNavigate();
    const [data, setdata] = useState({
        name: "",
        restuarantid: id,
        district: "",
        email: "",
        place: "",
        pin: "",
        time: "",
        phone: "",
        special: "",
        meals: "",
        features: "",
        logo: "",
        images: [],
    });
    console.log(data);


    // const [details ,setdetails] = useState();
    const [updateddata, setupdateddata] = useState();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const setdetails = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setupdateddata({ ...updateddata, [name]: value });
    }
    const setRegister = (e) => {
        // Update the form fields as the user types
        setdata({ ...data, [e.target.name]: e.target.value });
    };
    // const setRegister = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setdata({ ...data, [name]: value });
    // };
    const validate = (values) => {
        var error = {};
        if (!values.name) {
            error.name = "Enter name";
        }

        if (!values.district) {
            error.district = "select district";
        }
        if (!values.email) {
            error.email = "Enter email";
        }
        if (!values.place) {
            error.place = "Enter place";
        }
        if (!values.pin) {
            error.pin = "Enter pin";
        }
        if (!values.time) {
            error.time = "Enter time";
        }
        if (!values.phone) {
            error.phone = "Enter phone";
        }
        if (!values.special) {
            error.special = "Enter special diets";
        }
        if (!values.meals) {
            error.meals = "Enter meals";
        }
        if (!values.features) {
            error.features = "Enter features";
        }
        if (!values.logo) {
            error.logo = "Enter logo";
        }
        if (!values.images) {
            error.images = "Upload image";
        }

        return error;
    };


    const validation = (e) => {
        e.preventDefault();
        setFormErrors(validate(data));
        setIsSubmit(true);

        if (Object.keys(formErrors).length === 0 && isSubmit) {
            if (files.length > 0) {
                const data = new FormData();
                files.forEach((files) => {
                    data.append("files", files);
                });

                axios
                    .post("http://localhost:4001/save/upload-images", data)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log("Error in POST request:", err);
                    });

            }
            if (logo) {
                const single = new FormData();



                single.append("logo", logo);


                axios
                    .post("http://localhost:4001/save/upload-logo", single)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log("Error in POST request:", err);
                    });

            }

            {
                hoteldetails == null
                  ? (
                      axios.post("http://localhost:4001/save/add-hotel", data)
                        .then((res) => {
                            localStorage.setItem("formfill","added")
                          console.log("Response from POST request:", res);
                          navigate("/hotel/hotel_details");
                          toast.success(res.data.message);
                        })
                        .catch((err) => {
                          console.log("Error in POST request:", err);
                          toast.error(err.response.data.message);
                        })
                    )
                  : (
                      axios.post("http://localhost:4001/save/update-hoteldetails", data)
                        .then((res) => {
                          console.log("response of updatehoteldetails", res);
                          toast.success(res.data.message);
                        })
                        .catch((err) => {
                          console.log("Error in POST request of update hoteldetails:", err);
                          toast.error(err.response.data.message);
                        })
                    )
              }
              


        }
    };

    return (
        <>
            {hoteldetails == null ? 
           ( <div className="container">
                <div className="row" id="log-div0">
                    <div className="col-lg-12" id="log-div1">
                        <form onSubmit={validation}>
                            <h2>Add Restaurant Details</h2> <br />
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Restaurant Name
                                </label>
                                <input
                                    name="name"
                                    onChange={setRegister}
                                    onClick={() => {
                                        setFormErrors({ ...formErrors, name: "" });
                                    }}
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                                <span style={{ color: formErrors.name ? "red" : "" }}>
                                    {" "}
                                    {formErrors.name}{" "}
                                </span>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Select District
                                </label>
                                <select
                                    onChange={setRegister}
                                    onClick={() => {
                                        setFormErrors({ ...formErrors, district: "" });
                                    }}
                                    type="text"
                                    name="district"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                >
                                    <option value="">select</option>
                                    {district.map((district, key) => (
                                        <option value={district.district}>
                                            {district.district}
                                        </option>
                                    ))}
                                </select>

                                <span style={{ color: formErrors.district ? "red" : "" }}>
                                    {" "}
                                    {formErrors.district}{" "}
                                </span>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    onChange={setRegister}
                                    onClick={() => {
                                        setFormErrors({ ...formErrors, email: "" });
                                    }}
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                                <span style={{ color: formErrors.email ? "red" : "" }}>
                                    {" "}
                                    {formErrors.email}{" "}
                                </span>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Place
                                </label>
                                <input
                                    type="text"
                                    onChange={setRegister}
                                    onClick={() => {
                                        setFormErrors({ ...formErrors, place: "" });
                                    }}
                                    name="place"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                                <span style={{ color: formErrors.place ? "red" : "" }}>
                                    {" "}
                                    {formErrors.place}{" "}
                                </span>
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Pin no
                                </label>
                                <input
                                    type="text"
                                    onChange={setRegister}
                                    onClick={() => {
                                        setFormErrors({ ...formErrors, pin: "" });
                                    }}
                                    name="pin"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                                <span style={{ color: formErrors.pin ? "red" : "" }}>
                                    {" "}
                                    {formErrors.pin}{" "}
                                </span>
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Working time
                                </label>
                                <input
                                    type="text"
                                    onChange={setRegister}
                                    onClick={() => {
                                        setFormErrors({ ...formErrors, time: "" });
                                    }}
                                    name="time"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                                <span style={{ color: formErrors.time ? "red" : "" }}>
                                    {" "}
                                    {formErrors.time}{" "}
                                </span>
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Phone no
                                </label>
                                <input
                                    type="text"
                                    onChange={setRegister}
                                    onClick={() => {
                                        setFormErrors({ ...formErrors, phone: "" });
                                    }}
                                    name="phone"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                                <span style={{ color: formErrors.phone ? "red" : "" }}>
                                    {" "}
                                    {formErrors.phone}{" "}
                                </span>
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Special diets
                                </label>
                                <input
                                    type="text"
                                    onChange={setRegister}
                                    onClick={() => {
                                        setFormErrors({ ...formErrors, special: "" });
                                    }}
                                    name="special"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                                <span style={{ color: formErrors.special ? "red" : "" }}>
                                    {" "}
                                    {formErrors.special}{" "}
                                </span>
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Meals
                                </label>
                                <input
                                    type="text"
                                    onChange={setRegister}
                                    onClick={() => {
                                        setFormErrors({ ...formErrors, meals: "" });
                                    }}
                                    name="meals"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                                <span style={{ color: formErrors.meals ? "red" : "" }}>
                                    {" "}
                                    {formErrors.meals}{" "}
                                </span>
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Features
                                </label>
                                <input
                                    type="text"
                                    onChange={setRegister}
                                    onClick={() => {
                                        setFormErrors({ ...formErrors, features: "" });
                                    }}
                                    name="features"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                                <span style={{ color: formErrors.features ? "red" : "" }}>
                                    {" "}
                                    {formErrors.features}{" "}
                                </span>
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">
                                    Restaurant Logo
                                </label>
                                <input
                                    className="form-control"
                                    name="logo"
                                    onChange={(e) => {
                                        console.log(e.target.files[0]);
                                        setlogo(e.target.files[0]);
                                        setdata({ ...data, logo: e.target.files[0].name });
                                    }}
                                    onClick={() => {
                                        setFormErrors({ ...formErrors, logo: "" });
                                    }}
                                    type="file"
                                    id="formFile"
                                />

                                <span style={{ color: formErrors.logo ? "red" : "" }}>
                                    {" "}
                                    {formErrors.logo}{" "}
                                </span>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">
                                    Images
                                </label>
                                <input
                                    className="form-control"
                                    name="images"
                                    multiple
                                    onChange={(e) => {
                                        console.log(e.target.files);
                                        setFiles([...e.target.files]);
                                        setdata({
                                            ...data,
                                            images: [...e.target.files].map((file) => file.name),
                                        });
                                    }}
                                    onClick={() => {
                                        setFormErrors({ ...formErrors, images: "" });
                                    }}
                                    type="file"
                                    id="formFile"
                                />
                                <span style={{ color: formErrors.images ? "red" : "" }}>
                                    {" "}
                                    {formErrors.images}{" "}
                                </span>
                            </div>

                            <button
                                type="submit"
                                onClick={validation}
                                className="btn btn-primary"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>)


                :


               ( <div className="container">
                    <div className="row" id="log-div0">
                        <div className="col-lg-12" id="log-div1">
                            <form onSubmit={validation}>
                                <h2>Add Restaurant Details</h2> <br />
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Restaurant Name
                                    </label>
                                    <input
                                        name="name"
                                        value={data.name}
                                        placeholder={hoteldetails.name}

                                        onChange={setRegister}

                                        onClick={() => {
                                            setFormErrors({ ...formErrors, name: "" });
                                        }}
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <span style={{ color: formErrors.name ? "red" : "" }}>
                                        {" "}
                                        {formErrors.name}{" "}
                                    </span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Select District
                                    </label>
                                    <select
                                        onChange={setRegister}
                                        onClick={() => {
                                            setFormErrors({ ...formErrors, district: "" });
                                        }}
                                        type="text"
                                        name="district"
                                        value={data.district}
                                        className="form-control"
                                        id="exampleInputPassword1"
                                    >
                                        <option value="">select</option>
                                        {district.map((district, key) => (
                                            <option value={district.district}>
                                                {district.district}
                                            </option>
                                        ))}
                                    </select>

                                    <span style={{ color: formErrors.district ? "red" : "" }}>
                                        {" "}
                                        {formErrors.district}{" "}
                                    </span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        name="email"
                                        value={data.email}
                                        onChange={setRegister}
                                        onClick={() => {
                                            setFormErrors({ ...formErrors, email: "" });
                                        }}
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <span style={{ color: formErrors.email ? "red" : "" }}>
                                        {" "}
                                        {formErrors.email}{" "}
                                    </span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Place
                                    </label>
                                    <input
                                        type="text"
                                        onChange={setRegister}
                                        onClick={() => {
                                            setFormErrors({ ...formErrors, place: "" });
                                        }}
                                        name="place"
                                        value={data.place}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <span style={{ color: formErrors.place ? "red" : "" }}>
                                        {" "}
                                        {formErrors.place}{" "}
                                    </span>
                                    <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Pin no
                                    </label>
                                    <input
                                        type="text"
                                        onChange={setRegister}
                                        onClick={() => {
                                            setFormErrors({ ...formErrors, pin: "" });
                                        }}
                                        name="pin"
                                        value={data.pin}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <span style={{ color: formErrors.pin ? "red" : "" }}>
                                        {" "}
                                        {formErrors.pin}{" "}
                                    </span>
                                    <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Working time
                                    </label>
                                    <input
                                        type="text"
                                        onChange={setRegister}
                                        onClick={() => {
                                            setFormErrors({ ...formErrors, time: "" });
                                        }}
                                        name="time"
                                        value={data.time}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <span style={{ color: formErrors.time ? "red" : "" }}>
                                        {" "}
                                        {formErrors.time}{" "}
                                    </span>
                                    <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Phone no
                                    </label>
                                    <input
                                        type="text"
                                        onChange={setRegister}
                                        onClick={() => {
                                            setFormErrors({ ...formErrors, phone: "" });
                                        }}
                                        name="phone"
                                        value={data.phone}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <span style={{ color: formErrors.phone ? "red" : "" }}>
                                        {" "}
                                        {formErrors.phone}{" "}
                                    </span>
                                    <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Special diets
                                    </label>
                                    <input
                                        type="text"
                                        onChange={setRegister}
                                        onClick={() => {
                                            setFormErrors({ ...formErrors, special: "" });
                                        }}
                                        name="special"
                                        value={data.special}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <span style={{ color: formErrors.special ? "red" : "" }}>
                                        {" "}
                                        {formErrors.special}{" "}
                                    </span>
                                    <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Meals
                                    </label>
                                    <input
                                        type="text"
                                        onChange={setRegister}
                                        onClick={() => {
                                            setFormErrors({ ...formErrors, meals: "" });
                                        }}
                                        name="meals"
                                        value={data.meals}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <span style={{ color: formErrors.meals ? "red" : "" }}>
                                        {" "}
                                        {formErrors.meals}{" "}
                                    </span>
                                    <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Features
                                    </label>
                                    <input
                                        type="text"
                                        onChange={setRegister}
                                        onClick={() => {
                                            setFormErrors({ ...formErrors, features: "" });
                                        }}
                                        name="features"
                                        value={data.features}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <span style={{ color: formErrors.features ? "red" : "" }}>
                                        {" "}
                                        {formErrors.features}{" "}
                                    </span>
                                    <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">
                                        Restaurant Logo
                                    </label>
                                    <input
                                        className="form-control"
                                        name="logo"
                                        // value={data.logo}
                                        onChange={(e) => {
                                            console.log(e.target.files[0]);
                                            setlogo(e.target.files[0]);
                                            setdata({ ...data, logo: e.target.files[0].name });
                                        }}
                                        onClick={() => {
                                            setFormErrors({ ...formErrors, logo: "" });
                                        }}
                                        type="file"
                                        id="formFile"
                                    />

                                    <span style={{ color: formErrors.logo ? "red" : "" }}>
                                        {" "}
                                        {formErrors.logo}{" "}
                                    </span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">
                                        Images
                                    </label>
                                    <input
                                        className="form-control"
                                        name="images"
                                        // value={data.images}
                                        multiple
                                        onChange={(e) => {
                                            console.log(e.target.files);
                                            setFiles([...e.target.files]);
                                            setdata({
                                                ...data,
                                                images: [...e.target.files].map((file) => file.name),
                                            });
                                        }}
                                        onClick={() => {
                                            setFormErrors({ ...formErrors, images: "" });
                                        }}
                                        type="file"
                                        id="formFile"
                                    />
                                    <span style={{ color: formErrors.images ? "red" : "" }}>
                                        {" "}
                                        {formErrors.images}{" "}
                                    </span>
                                </div>

                                <button
                                    type="submit"
                                    onClick={validation}
                                    className="btn btn-primary"
                                >
                                   update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>)}


        </>
    );
}

export default Add_hotel;
