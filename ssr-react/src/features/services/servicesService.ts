import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchServices = createAsyncThunk(
  'service/fetchServices',
  async () => {
    const response = await fetch(
      'https://json.extendsclass.com/bin/0c1f016deb5c',
      {
        method: 'GET',
      }
    )
    const services = await response.json()
    return services
  }
)
