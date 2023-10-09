import { useState } from "react";
import Modal from "./Modal";

const Form = ({setOpen}: {setOpen: Function}) => {
  return (
  <Modal Title="Add" OnClose={() => {setOpen(!open)}}>
    <form onSubmit={(e) => {
      e.preventDefault();
    }}>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" />
      </div>
      <div>
      { /* Would be replaced with an dropdown */ } 
        <label htmlFor="">Place</label>
        <input type="text" />
      </div>
      <div>
        <input type="submit" value="Create new item" />
      </div>
    </form>
  </Modal>)
}

const AddButton = ({onClick}: {onClick: Function}) => {
  const [open, setOpen] = useState(false);
    return (
      <div>
        {open? <Form setOpen={setOpen} />: <div />}
        <div onClick={() => {setOpen(!open)}} className='add'>
          <div className='add-1' />
          <div className='add-2' />
        </div>
      </div>)
}

export default AddButton;