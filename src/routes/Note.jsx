import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Col from "../components/Col";
import Row from "../components/Row";
import {Doc, getDoc} from 'firebase/firestore'
import db from '../db.js'

function Note () {
  const params = useParams()
  const [note, setNote] = useState({
    title: '',
    text: ''
  })

  useEffect(() => {
    getDoc(doc(db, 'notes', params.id))
    .then( document => {
      setNote({
      title: document.data().title,
      text: document.data().text
      })
  })
   }, [])

  function changeHandler (e) {

  }

  function submitHandler (e) {
    e.preventDefault()
  }

  function clickHandler () {

  }

  return (
    <Row>
      <Col>
        <form class="p-5 bg-light border border-1 mb-3"
          onSubmit={submitHandler}>
          <h2 class="mb-3">Edit Note: {params.id}</h2>
          <div class="mb-3">
            <label class="form-label">Title</label>
            <input name="title" type="text" class="form-control"
              value={note.title} onChange={changeHandler}  />
          </div>
          <div class="mb-3">
            <label class="form-label">Text</label>
            <textarea name="text" class="form-control"
              value={note.text} onChange={changeHandler}></textarea>
          </div>
          <div class="d-flex justify-content-end">
            <Link class="btn btn-secondary me-3" to="/">Cancel</Link>
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </form>

        <button type="button" class="btn btn-danger"
          onClick={clickHandler}>Delete</button>
      </Col>
    </Row>
  )
}

export default Note