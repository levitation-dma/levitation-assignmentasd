import React, { useState } from 'react'
import Geolocation from './getGeolocation'

function Form () {
  // Callback function to get the data from geolocaiton

  const getData = data => {
    setgeolocation(data.toString())
  }

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phoneno, setPhoneno] = useState('')
  const [addressone, setAddressone] = useState('')
  const [addresstwo, setAddresstwo] = useState('')
  const [city, setCity] = useState('')
  const [state, setstate] = useState('')
  const [pincode, setPincode] = useState(0)
  const [country, setCountry] = useState('')
  const [geolocation, setgeolocation] = useState('')
  const [singleFile, setsingleFile] = useState('')
  const [multipleFile, setMultipleFile] = useState([])
  const [fileLimit, setFileLimit] = useState(false)

  const handleMultipleFileUpload = files => {
    const upload = [...multipleFile]
    let limitExceed = false
    files.some(file => {
      if (upload.length > 6) setFileLimit(true)

      alert(`You can only upload at max 5 Files`)
      setFileLimit(false)
      limitExceed(true)
    })
    if (!limitExceed) setMultipleFile(upload)
  }

  const handleFileEvent = e => {
    const chosenfile = Array.prototype.slice.call(e.target.files)
    handleMultipleFileUpload(chosenfile)
  }

  async function loginUser (credentials) {
    return fetch('https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(data => data.status)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(username)
    console.log(email)
    console.log(phoneno)
    console.log(addressone)
    console.log(addresstwo)
    console.log(city)
    console.log(state)
    console.log(pincode)
    console.log(country)
    console.log(geolocation)
    console.log(singleFile)
    console.log(multipleFile)

    const response = await loginUser({
      username,
      email,
      phoneno,
      addressone,
      addresstwo,
      city,
      state,
      pincode,
      country,
      geolocation,
      singleFile,
      multipleFile
    })
    console.log(response)
    if (response === 200) {
      navigate('/form')
    } else {
      alert('Invalid input fields of form..')
      e.target.reset()
    }
  }

  const formStyleInput =
    'block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
  const formStylelabel = 'block text-sm font-semibold text-gray-800'

  return (
    <div className='relative flex flex-col justify-center min-h-screen overflow-hidden '>
      <div className='w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
        <h1 className='text-3xl font-semibold text-center text-purple-700'>
          Form
        </h1>
        <form className='mt-6' onSubmit={handleSubmit}>
          <div class='grid grid-cols-2 gap-4'>
            <div className='mb-2'>
              <label for='username' className={formStylelabel}>
                User Name
              </label>
              <input
                type='text'
                className={formStyleInput}
                placeholder='Enter User Name'
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label for='email' className={formStylelabel}>
                Email
              </label>
              <input
                type='email'
                className={formStyleInput}
                placeholder='Enter Email'
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label for='phoneno' className={formStylelabel}>
                Phone No
              </label>
              <input
                type='text'
                className={formStyleInput}
                placeholder='Enter Phone-No'
                onChange={e => setPhoneno(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label for='address1' className={formStylelabel}>
                Address Line 1
              </label>
              <input
                type='text'
                className={formStyleInput}
                placeholder='Enter Address 1'
                onChange={e => setAddressone(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label for='address2' className={formStylelabel}>
                Address Line 2
              </label>
              <input
                type='text'
                className={formStyleInput}
                placeholder='Enter Address 2'
                onChange={e => setAddresstwo(e.target.value)}
              />
            </div>

            <div className='mb-2'>
              <label for='city' className={formStylelabel}>
                City
              </label>
              <input
                type='text'
                className={formStyleInput}
                placeholder='Enter City'
                onChange={e => setCity(e.target.value)}
              />
            </div>

            <div className='mb-2'>
              <label for='state' className={formStylelabel}>
                State
              </label>
              <input
                type='text'
                className={formStyleInput}
                placeholder='Enter state'
                onChange={e => setstate(e.target.value)}
              />
            </div>

            <div className='mb-2'>
              <label for='pincode' className={formStylelabel}>
                Pin Code
              </label>
              <input
                type='number'
                className={formStyleInput}
                placeholder='Enter Pin code'
                onChange={e => setPincode(e.target.value)}
              />
            </div>
          </div>
          <div className='mb-2'>
            <label for='pincode' className={formStylelabel}>
              Country
            </label>
            <input
              type='text'
              className={formStyleInput}
              placeholder='Enter Country'
              onChange={e => setCountry(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label className={formStylelabel} for='file_input'>
              File Upload
            </label>
            <input
              className={formStyleInput}
              id='file_input'
              type='file'
              placeholder='Upload Single File'
              onChange={e => setsingleFile(e.target.value)}
            />
            <p
              class='mt-1 text-sm text-gray-500 dark:text-gray-300'
              id='file_input_help'
            >
              Valid type PNG and PDF (Upload limit 1 file)
            </p>
          </div>
          <div className='mb-2'>
            <label className={formStylelabel} for='file_input'>
              Mulitple file Upload
            </label>
            <input
              className={formStyleInput}
              id='file_input'
              type='file'
              multiple
              placeholder='Enter Multiple File'
              onChange={handleFileEvent}
              disabled={fileLimit}
            />
            <p
              class='mt-1 text-sm text-gray-500 dark:text-gray-300'
              id='file_input_help'
            >
              Valid type PNG and PDF (Upload limit 5 file)
            </p>
          </div>
          <div className='mb-2'>
            <label className={formStylelabel} for='file_input'>
              Geo Location Stutus
            </label>
          </div>
          <Geolocation getData={getData} />
          <div className='mt-6'>
            <button className={formStyleInput}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
