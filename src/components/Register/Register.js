import React from 'react';

const Register = () => {
        return (
                <div>
                        <h3 className="text-center">Please Register!</h3>
                        <div>
                                <input type="text" placeholder="Enter Your Name" />
                                <br />
                                <input type="email" name="" placeholder="Enter Your Email" id="" />
                                <br />
                                <input type="password" placeholder="Enter Your Password" name="" id="" />
                                <br />
                                <input type="submit" value="Register" />
                        </div>
                </div>
        );
};

export default Register;