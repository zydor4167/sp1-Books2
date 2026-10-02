import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
function App() {
const [title, setTitle] = useState('')
const [author, setAuthor] = useState('')
const [genre, setGenre] = useState('')
const handleAdd = () => {
console.log(`tytuł: ${title}; autor: ${author}; gatunek: ${genre}`)
}
return (
<div style={{ padding: '20px' }}>
<div className="form-group">
<label htmlFor="bookTitle">Tytuł książki</label>
<input
type="text"
className="form-control"
id="bookTitle"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>
</div>
<div className="form-group">
<label htmlFor="bookAuthor">Autor książki</label>
<input
type="text"
className="form-control"
id="bookAuthor"
value={author}
onChange={(e) => setAuthor(e.target.value)}
/>
</div>
<div className="form-group">
<label htmlFor="bookGenre">Gatunek</label>
<select
className="form-control"
id="bookGenre"
value={genre}
onChange={(e) => setGenre(e.target.value)}
>
<option value=""></option>
<option value="1">Powieść</option>
<option value="2">Kryminał</option>
<option value="3">Fantastyka</option>
<option value="4">Biografia</option>
</select>
</div>
<button type="button" className="btn btn-primary" onClick={handleAdd}>
Dodaj
</button>
</div>
)
}
export default App 