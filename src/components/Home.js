import React from 'react';

import logo from '../img/build.png';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="row-fluid box">

      <div className='container text-center p-3'>
        <h2 className="pt-5 ">
          Build Your Dream Space With <strong>BuildEasy</strong>
        </h2>
        <h5 className="pt-4 ">
          We are the team of experienced builders for building your customised dream space.
            </h5>

        <Modal.Dialog>

          <Modal.Body>

            <Button variant="primary text-right">Save changes</Button>

          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>

          </Modal.Footer>
        </Modal.Dialog>

      </div>
    </div>
  )
}

export default Home;
