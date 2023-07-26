## Retrieve data
1. In Notes.jsx, import the `useEffect` method from react; import `collection`, `query`, `onSnapshot` from firesbase/firstore; import the `db` variable to establish the connection to firestore
```
import { useState, useEffect } from "react";
```
```
import {collection, query, onSnapshot} from 'firebase/firestore'
```
```
import db from '../db'
```

2. Through a useEffect, which should be executed only when the page first loads. Create the collection, the query, get the snapshot and parse the data
```
useEffect(() => { }, [])
```
```
const c = collection(db, 'notes')
```
```
const q = query(c)
```
```
const unsubscribe = onSnapshot(q, (snapshot) => {
      //create a temporary array
      const data = []
      //push each lelement to the array
      snapshot.forEach((doc) => data.push({
        id: doc.id,
        title: doc.data().title,
        text: doc.data().text
      }) )
})
```
3. update the value of the state variable
```
setNotes(data)
```

## Display info
1. Use the map method to generate the notes
```
{ notes.map( (note) => (
        <Col key={note.id} className="col-12 col-md-6 col-lg-4 mb-3">
            <Link className="text-decoration-none text-body" to="/note/1">
            <Card title="Title" text="Text" />
            </Link>
        </Col>
    )
)}
```
2. Call the Card component with dynamic data
```
<Card title={note.title} text={note.text} />
```
3. Set the dynamic route
```
to={"/note/" + note.id}
```
4. Add a new note and test your app

## Sort method
1. In Notes.jsx, import the orderBy method
```
import {collection, query, onSnapshot, orderBy} from 'firebase/firestore'
```
2. Use the orderBy in the query method to sort the document by the title
```
const q = query(c, orderBy('title'))
```

## Retrieve an individual collection
1. In the Note virtual page (Note.jsx),import `useEffect` from react; import `doc` and `getDoc` methods from firebase/firestore; and the `db` from db.js
```
import { useEffect, useState } from "react"
```
```
import {doc, getDoc} from 'firebase/firestore'
```
```
import db from '../db'
```

2. Through useEffect, which should be executed only when the page first loads, get the document from firestore
```
useEffect(() => { }, [])
```
```
getDoc(doc(db, 'notes', params.id))
```

3. parse the data and update the state variable
```
.then( document => {
    setNote({
    title: document.data().title,
    text: document.data().text
    })
})
```

