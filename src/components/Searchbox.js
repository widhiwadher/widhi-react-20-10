import React from 'react'
import Button from 'react-bootstrap/Button'
import Cities from "../components/Cities";
const Searchbox = () => {
    return (
        <div>
            <div class="shadow p-3 mb-5 bg-body rounded">
                <div className="row-fluid">
                    <Cities />
                    <Button variant="outline-success ">Searchbox</Button>{' '}
                </div>
            </div>
        </div>
    )
}

export default Searchbox
