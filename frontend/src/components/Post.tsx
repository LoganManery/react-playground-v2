import { useState } from 'react'

export default function Post() {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 
    e.preventDefault();
    const dataToSend = new FormData()

    dataToSend.append('headers', formData.headers)
    dataToSend.append('content', formData.content)

      try {
          
          const response = await fetch('https://127.0.0.1:3000/user/post', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData),
              credentials: 'include'
          });
          
          const data = await response.json();
          
          if(response.ok) {
              console.log(data.message);
          } else {
              console.error(data.message);
          }
      } catch (err) {
          console.error('There was an error!', err)
      }
  }

  const [formData, setFormData] = useState({
    headers: '',
    content: ''
  });
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-2 border-4 border-black shadow-2xl rounded-lg m-auto p-5 bg-rose-200" 
      >
        <h1
          className="text-black mx-auto text-4xl font-mono font-extrabold"
        >Post</h1>
        <img></img>
        <input
          onChange={(headers) => setFormData({...formData, headers: headers.target.value})} 
          className="rounded border-2 border-black text-center"
          type="text"
          placeholder="Headers"
          value={formData.headers}
          ></input>
        <textarea
          onChange={(content) => setFormData({...formData, content: content.target.value})}
          className="rounded border-2 border-black text-center"
          placeholder="Enter content here..."
          value={formData.content}
        >
        </textarea>
        <input 
          type="submit"
          className="border-2 border-black rounded w-1/2 self-center"
          ></input>
      </form>
    </>
  )
}