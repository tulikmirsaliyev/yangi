import React from 'react'

const Signup = () => {
  return (
    <>
    <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal"><span cassName="fa fa-sign-in me-4"></span>
                Register
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4
                            "><span classname="fa fa-google me-2"></span>Sign in With Google</button>
                            <button className="btn btn-primary w-100 mb-4
                            "><span classname="fa-brands fa-google"></span>Sign in With Facebook</button>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit " class="btn btn-outline-primary w-100 ">Submit</button>
                            </form>


                        </div>
                        
                    </div>
                </div>
            </div>

    </>
  )
}

export default Signup