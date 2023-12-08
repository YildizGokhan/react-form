import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import "./forms.css"
import Cards from '../card/Cards';

const Forms = () => {

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        image: "",


    })
    const { username, email, password, firstname, lastname, image } = data

    
    const [kosul, setKosul] = useState(false)
    const [clickButton, setClickButton] = useState(false)
    const [visiblePassword, setVisiblePassword] = useState(true)
    const [cardVisible, setCardVisible] = useState(true)
   
    
    

    const handleData = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    
    const handleFormStart = () => {
        if (
            password.length < 8 ||
            username.trim().length < 3 ||
            firstname.trim().length < 3 ||
            lastname.trim().length < 3
        ) {
            setKosul(true);
        } else {
            setKosul(false);
        }
    };

    const handleStop = () => {

        setTimeout(() => {
            setKosul(false);
        }, 100);
    };

   
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        visibleCard()
        setClickButton(true);
        setTimeout(() => {
            setClickButton(!cardVisible)
        },500)

             
}
    
    
    const changeVisibility = () => {
        setVisiblePassword(!visiblePassword)
    }
    
    const visibleCard = () => {
        setCardVisible(!cardVisible)

    }


    return (
        <>
            <Form className='d-flex flex-column mx-auto col-12 col-sm-8 col-md-6 mt-3' onSubmit={handleFormSubmit} >
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor='email'>Email address</Form.Label>
                    <Form.Control onChange={handleData} type="email" placeholder="Enter email" value={email} id="email" required />

                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor='username'>Username</Form.Label>
                    <Form.Control onChange={handleData} type="text" placeholder="Enter User Name" id='username' required value={username} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor='firstname'>First Name</Form.Label>
                    <Form.Control onChange={handleData} type="text" placeholder="Enter First Name" id='firstname' value={firstname} required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor='lastname'>Last Name</Form.Label>
                    <Form.Control onChange={handleData} type="text" placeholder="Enter Last Name" id='lastname' value={lastname} required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor='image'>Image Name</Form.Label>
                    <Form.Control onChange={handleData} type="url" placeholder="Enter Image Url" id='image' value={image} required />
                </Form.Group>

                <InputGroup className="mb-3 d-flex flex-column">
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <div className='d-flex '>
                        <Form.Control
                            onChange={handleData}
                            type={visiblePassword ? 'password' : "text"}
                            id='password'
                            value={password}
                            placeholder="Password"
                            aria-label="password"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant={visiblePassword ? "outline-danger" : "outline-primary"} id="button-addon2" onClick={changeVisibility}>
                            {visiblePassword ? "Show" : "Hidden"}
                        </Button>
                    </div>

                </InputGroup>

                <Form.Group className="mb-3 d-flex mx-auto" role='button' onMouseLeave={handleStop} >
                    <Button className={`btn mt-3 ${kosul ? "animate" : ""}`} variant={kosul ? "success" : "danger"} type="submit"  disabled={kosul} onMouseMove={handleFormStart} >
                       {clickButton ? "New Card" : "Submit"}
                    </Button>
                </Form.Group>
                {cardVisible ? "" : <Cards veri={data} />}
            </Form>
            

        </>
    )
}

export default Forms