import React from 'react'
import"./form.css"

const LoginForm = () => {
  return (
    <div className='form-background'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <div className='form-valedaiton card'>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputUserName"className='form-label'>User Name</label>
                            <input type='text' className='form-control' id='exampleInputUserName'/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
            <div className='col-md-4'></div>

        </div>
    </div>

  )
}

export default LoginForm